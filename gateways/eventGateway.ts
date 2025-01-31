import env from "@/env";
import { SingleEvent } from "@/types/eventType";

const BACKEND_BASE_URL = env.BACKEND_URL;

export async function fetchEvents(): Promise<SingleEvent[]> {
  const res = await fetch(`${BACKEND_BASE_URL}/api/events?populate=picture`);
  const events = await res.json();
  return events.data;
}
