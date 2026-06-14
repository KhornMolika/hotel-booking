import axios, { type AxiosInstance, type InternalAxiosRequestConfig, AxiosError } from 'axios';
import type { RefreshResponse } from './types';

const BASE_URL = (import.meta.env.VITE_API_BASE_URL as string)?.replace(/\/$/, "");

console.log("Your Backend URL is:", import.meta.env.VITE_API_BASE_URL);

export const axiosPublic: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

export const axiosPrivate: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

let accessToken = ''; 

export const setInMemoryToken = (token: string): void => {
  accessToken = token;
};

// Request Interceptor: Attach the bearer token
axiosPrivate.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (!config.headers['Authorization'] && accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Response Interceptors: Auto Refresh Tokens
axiosPrivate.interceptors.response.use(
  (response) => response, 
  async (error: AxiosError) => {
    const prevRequest = error?.config as CustomAxiosRequestConfig;
    
    if (error?.response?.status === 401 && prevRequest && !prevRequest._retry) {
      prevRequest._retry = true;

      try {
        const storedRefreshToken = typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null;
        
        if (!storedRefreshToken) throw new Error("No refresh token found");

        const response = await axiosPublic.post<RefreshResponse>('/auth/refresh', {
          refreshToken: storedRefreshToken
        });
        
        const newAccessToken = response.data.accessToken;
        const newRefreshToken = response.data.refreshToken;

        setInMemoryToken(newAccessToken);
        if (typeof window !== 'undefined') {
          localStorage.setItem('refreshToken', newRefreshToken);
        }
        
        if (prevRequest.headers) {
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        }
        
        return axiosPrivate(prevRequest);
      } catch (refreshError) {

        setInMemoryToken('');
        if (typeof window !== 'undefined') {
          localStorage.removeItem('user');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login'; 
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);