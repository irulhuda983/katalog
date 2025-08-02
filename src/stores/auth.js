import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(localStorage.getItem("katalogUserData") || null);
  const token = ref(sessionStorage.getItem("katalogAccessToken") || null);
  const isAuthenticated = computed(() => !!(user.value && token.value));

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

  return {
    user,
    token,
    isAuthenticated,
    setUser,
    setToken
  };
});