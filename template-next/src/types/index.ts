export interface ApiResponseType<T> {
  data: T;
  message: string;
  status: string;
}
