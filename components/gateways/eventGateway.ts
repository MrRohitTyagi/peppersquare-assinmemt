import { SingleEvent } from "@/types/eventType";

const BASE_URL = "http://localhost:1337";

export async function fetchEvents(): Promise<SingleEvent[]> {
  const res = await fetch(`${BASE_URL}/api/events?populate=picture`, {
    // cache: "no-store",
  });
  const events = await res.json();
  return events.data;
}
