/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getSession, signIn, signOut } from 'next-auth/react';
import { createQuery } from 'react-query-kit';
import axiosRequest, { axiosInstance } from './client';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
  },
});

// Add an interceptor to attach the authentication token to headers
apiClient.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session && 'accessToken' in session) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response errors (e.g., token expiration)
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle error display or check if there a refresh token
      await signOut();
    }
    return Promise.reject(error);
  }
);

// Auth hooks for sign-in and sign-out
export const useAuth = () => {
  const handleSignIn = async (
    provider: string,
    credentials?: Record<string, unknown>
  ) => {
    try {
      const result = await signIn(provider, credentials);
      if (result?.error) {
        // TODO handle exepction
      }
    } catch (error) {
      // TODO handle exepction
      // eslint-disable-next-line no-console
      console.error('Sign-in failed:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
    } catch (error) {
      // TODO handle exepction
      // eslint-disable-next-line no-console
      console.error('Sign-out failed:', error);
    }
  };

  return {
    signIn: handleSignIn,
    signOut: handleSignOut,
  };
};

// API hooks with usePost and useUpdate
export const useApi = <T>(
  url: string,
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  options?: {
    onSuccess?: (data: T) => void;
    onError?: (error: AxiosError) => void;
    isMultipart?: boolean;
  }
) => {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isError: isMutationError,
    error: mutationError,
    data: mutationData,
    isPending: isMutationLoading,
  } = useMutation({
    mutationFn: (data?: unknown) =>
      axiosRequest({
        url,
        method,
        data,
        isMultipart: options?.isMultipart,
      }).then((res) => res?.data as T),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [url] });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: (error) => {
      if (options?.onError) {
        options.onError(error as AxiosError);
      }
    },
    networkMode: 'always',
  });

  return {
    mutateAsync,
    isMutationError,
    isMutationLoading,
    mutationError,
    mutationData,
  };
};

interface UseGetOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: AxiosError) => void;
}

interface UseGetConfig<T> {
  queryKey: Record<string, unknown>;
  endpoint: string;
  config?: AxiosRequestConfig;
  options?: UseGetOptions<T>;
  shouldFetch?: boolean;
  includeHeaders?: boolean;
}

type Variables = Record<string, unknown>;

export const useFetchData = <T>({
  queryKey,
  endpoint,
  config,
  options,
  shouldFetch,
  includeHeaders,
}: UseGetConfig<T>) =>
  createQuery<T, Variables, AxiosError>({
    queryKey: [endpoint, config?.params, queryKey],
    enabled: shouldFetch,
    networkMode: 'always',
    staleTime: 3,
    fetcher: async () => {
      try {
        const response = await axiosInstance.get(endpoint, {
          params: config?.params,
        });
        const data = includeHeaders
          ? {
              data: response.data,
              headers: response.headers,
            }
          : response.data;

        if (options?.onSuccess) {
          options?.onSuccess(data as T);
        }

        return data as T;
      } catch (error) {
        if (options?.onError) {
          options?.onError(error as AxiosError);
        }
        if (error instanceof AxiosError) {
          throw error;
        }
        throw error;
      }
    },
  });

export default useApi;
