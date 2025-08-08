import { ref, computed } from "vue";
import { defineStore } from "pinia";
import api from "@/lib/api";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(localStorage.getItem("katalogUserData") ? JSON.parse(localStorage.getItem("katalogUserData")) : null);
  const token = ref(sessionStorage.getItem("katalogAccessToken") || null);
  const isAuthenticated = computed(() => !!(token.value));

  // setter
  const setUser = (data) => {
    user.value = data;
    !user.value
      ? localStorage.removeItem("katalogUserData")
      : localStorage.setItem("katalogUserData", JSON.stringify(data));
  };

  const setToken = (data) => {
    token.value = data;
    !token.value
      ? sessionStorage.removeItem("katalogAccessToken")
      : sessionStorage.setItem("katalogAccessToken", data);
  };

  // actions
  const login = async (payload) => {
    try {
      const { data } = await api.post('/auth/login', payload);
      await Promise.all([setToken(data.data.accessToken), fetchProfil()]);

      return data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (payload) => {
    try {
      const { data } = await api.post('/auth/register', payload);

      await Promise.all([setToken(data.data.accessToken)]);

      return data;
    } catch (error) {
      throw error;
    }
  };

  const fetchProfil = async () => {
    const token = sessionStorage.getItem("katalogAccessToken");
    if (!token) return;

    try {
      const { data } = await api.get('/auth/profil');
      setUser(data.data);
    } catch (error) {
      setToken(null);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      const result = await api.post(`/auth/logout`);

      setToken(null);
      setUser(null);
      location.reload();
    } catch (error) {
      throw error;
    }
  };

  return {
    // state
    user,
    token,
    isAuthenticated,
    setUser,
    setToken,
    // actions
    login,
    register,
    fetchProfil,
    logout
  };
});