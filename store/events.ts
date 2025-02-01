// Library import
import { create } from "zustand";

// Types
import { SingleEvent } from "@/types/eventType";

// Gateways
import { fetchEvents } from "@/controllers/eventController";
import { getErrorMessage } from "@/helpers/utils";

type EventStore = {
  events: SingleEvent[];
  isLoading: boolean;
  error: null | string;
};

export const useEvents = create<EventStore>((set) => {
  const initEvents = async () => {
    try {
      const data = await fetchEvents();
      set({ events: data, isLoading: false });
    } catch (error) {
      set({ error: getErrorMessage(error), isLoading: false });
    }
  };
  initEvents();
  return {
    error: null,
    events: [],
    isLoading: true,
  };
});
