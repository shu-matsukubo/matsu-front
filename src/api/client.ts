import axios from 'axios';
import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import {
  clearAuthTokens,
  getAccessToken,
  notifyAuthExpired,
  refreshAuthTokens,
} from '@/auth/session';

export const api = axios.create({
  baseURL: 'http://localhost:18080/api',
});

type RetriableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

let refreshPromise: Promise<string | null> | null = null;

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetriableRequestConfig | undefined;

    if (error.response?.status !== 401 || !originalRequest || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      refreshPromise ??= refreshAuthTokens().finally(() => {
        refreshPromise = null;
      });

      const token = await refreshPromise;

      if (!token) {
        throw new Error('Refresh token is missing.');
      }

      originalRequest.headers.Authorization = `Bearer ${token}`;
      return api(originalRequest);
    } catch (refreshError) {
      clearAuthTokens();
      notifyAuthExpired();
      return Promise.reject(refreshError);
    }
  },
);
