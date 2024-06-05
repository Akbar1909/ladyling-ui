import { create } from "zustand";

const useEnterModal = create((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}));

export default useEnterModal;
