// globalState.js (Frontend)
import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  mode: "light",
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setUser: (user) => set({ user }),
  setMode: (mode) => set({ mode }),
}));
