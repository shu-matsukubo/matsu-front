import axios from 'axios';

const ACCESS_TOKEN_KEY = 'kakeibo.accessToken';
const REFRESH_TOKEN_KEY = 'kakeibo.refreshToken';

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
};

const authBaseUrl =
  import.meta.env.VITE_AUTH_BASE_URL ?? 'http://localhost:18081';

const authApi = axios.create({
  baseURL: authBaseUrl,
});

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

export const saveAuthTokens = (tokens: AuthTokens) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
};

export const clearAuthTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const login = async (email: string, password: string) => {
  const res = await authApi.post<AuthTokens>('/auth/login', {
    email,
    password,
  });

  saveAuthTokens(res.data);
  return res.data;
};

export const register = async (email: string, password: string) => {
  const res = await authApi.post<AuthTokens>('/auth/register', {
    email,
    password,
  });

  saveAuthTokens(res.data);
  return res.data;
};

export const refreshAuthTokens = async () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    return null;
  }

  const res = await authApi.post<AuthTokens>('/auth/refresh', {
    refreshToken,
  });

  saveAuthTokens(res.data);
  return res.data.accessToken;
};

export const notifyAuthExpired = () => {
  window.dispatchEvent(new Event('kakeibo:auth-expired'));
};
