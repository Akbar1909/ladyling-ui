import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: Boolean(localStorage.getItem("token")),
  setToken: () => set(() => ({ isAuthenticated: true })),
}));

export default useAuthStore;
