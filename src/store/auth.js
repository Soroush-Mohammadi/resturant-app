import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref({});

  const isAuthenticated = computed(
    () => !!user.value && Object.keys(user.value).length > 0
  );

  return {
    isAuthenticated,
    user,
  };
});
