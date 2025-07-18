import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,

  setTokens: (accessToken, refreshToken) => {
    set({
      isLoggedIn: true,
      accessToken,
      refreshToken,
    });
  },

  clearAuth: () => {
    set({
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null,
    });
  },
}));
