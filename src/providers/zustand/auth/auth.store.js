"use client";
import cookie from "@/utils/cookie";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: Boolean(cookie.get("token")),
  setToken: () => set(() => ({ isAuthenticated: true })),
}));

export default useAuthStore;
