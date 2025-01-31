import { fetchEvents } from "@/components/gateways/eventGateway";
import { SingleEvent } from "@/types/eventType";
import { create } from "zustand";

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
