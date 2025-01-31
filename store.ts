import { create } from "zustand";

type Store = {
  currentFilter: string;
  setFilter: (e: string) => void;
};

export const useFilters = create<Store>()((set) => {
  return {
    currentFilter: "ALL",
    setFilter: (filter) => set((state) => ({ currentFilter: filter })),
  };
});
