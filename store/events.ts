// Library import
import { create } from "zustand";

// Types
import { SingleEvent } from "@/types/eventType";

// Gateways
import { fetchEvents } from "@/controllers/eventController";

type EventStore = {
  events: SingleEvent[];
  isLoading: boolean;
};

export const useEvents = create<EventStore>((set) => {
  const initEvents = async () => {
    const data = await fetchEvents();
    set({ events: data, isLoading: false });
  };
  initEvents();
  return {
    events: [],
    isLoading: true,
  };
});
