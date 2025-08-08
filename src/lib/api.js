import axios from "axios";
import { toast } from 'vue-sonner';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Intercept request → tambahkan access token
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("katalogAccessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Intercept response → refresh token jika 401
api.interceptors.response.use(
  response => response,
  async (error) => {
    const { response } = error;

    if (!response) {
      // Network error
      toast.error('Gagal terhubung ke server!');
      return Promise.reject(error);
    }

    switch (response.status) {
      case 401:
        // Unauthorized
        sessionStorage.removeItem("katalogAccesstoken");
        localStorage.removeItem("katalogUserData");
        break;
      case 403:
        toast.error('Akses ditolak!');
        break;
      case 404:
        toast.error('Data tidak ditemukan!');
        break;
      case 500:
        toast.error('Terjadi kesalahan di server.');
        break;
      default:
        toast.error(response.data?.message || 'Terjadi kesalahan.');
    }

    return Promise.reject(error);
  }
);

export default api;
