import axios, { type AxiosResponse } from 'axios';
import { getSession, signOut } from 'next-auth/react';

// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
  },
});

axiosInstance.interceptors.request.use(
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
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle error display or check if there a refresh token
      await signOut();
    }
    return Promise.reject(error);
  }
);
// Your axiosRequest function
interface AxiosRequestParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: unknown;
  params?: Record<string, unknown>;
  isMultipart?: boolean; // Flag to indicate if the request is multipart
}

const axiosRequest = async ({
  url,
  method,
  data,
  params = {},
  isMultipart = false, // Default is false, meaning Content-Type is application/json
}: AxiosRequestParams): Promise<AxiosResponse> => {
  try {
    // Set headers based on isMultipart flag
    const headers = {
      'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
    };

    const response: AxiosResponse = await axiosInstance({
      url,
      method,
      data,
      params,
      headers,
    });

    return response;
  } catch (error) {
    // Handle the error properly
    if (axios.isAxiosError(error)) {
      // eslint-disable-next-line no-console
      console.error(
        'error.response form Client.ts',
        error.response?.data?.message
      );

      throw new Error(
        JSON.stringify(error.response?.data?.message) || 'An error occurred'
      );
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export default axiosRequest;
