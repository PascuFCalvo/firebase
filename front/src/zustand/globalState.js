// globalState.js (Frontend)
import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setUser: (user) => set({ user }),
}));
