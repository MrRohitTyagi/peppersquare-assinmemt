// Library import
import { create } from "zustand";

// Types
import { FilterType } from "@/types/filterType";

// Gateways
import { fetchFilters } from "@/controllers/filterController";
import { getErrorMessage } from "@/helpers/utils";

type FilterStore = {
  filters: FilterType[];
  isLoading: boolean;
  error: null | string;
};

export const useFilters = create<FilterStore>((set) => {
  const initEvents = async () => {
    try {
      const data = await fetchFilters();
      set({ filters: data, isLoading: false });
    } catch (error) {
      set({ error: getErrorMessage(error), isLoading: false });
    }
  };
  initEvents();
  return {
    error: null,
    filters: [],
    isLoading: true,
  };
});
