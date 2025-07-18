import axios from 'axios';
import { useAuthStore } from '../stores/useAuthStore';

export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 백엔드 URL .env로
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('401: 토큰 만료 또는 인증 오류');
      // 여기서 토큰 재발급 로직
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
