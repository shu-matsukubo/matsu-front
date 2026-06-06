import axios from 'axios';

const bffBaseUrl =
  import.meta.env.VITE_BFF_BASE_URL ?? 'http://localhost:18082';

const authApi = axios.create({
  baseURL: bffBaseUrl,
  withCredentials: true,
});

export const login = async (email: string, password: string) => {
  await authApi.post('/auth/login', {
    email,
    password,
  });
};

export const register = async (email: string, password: string) => {
  await authApi.post('/auth/register', {
    email,
    password,
  });
};

export const refreshSession = async () => {
  await authApi.post('/auth/refresh');
};

export const logout = async () => {
  await authApi.post('/auth/logout');
};

export const getSession = async () => {
  const res = await authApi.get<{ authenticated: boolean }>('/auth/session');
  return res.data;
};

export const notifyAuthExpired = () => {
  window.dispatchEvent(new Event('kakeibo:auth-expired'));
};
