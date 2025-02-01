// Library imports
import axios from "axios";

import env from "@/env";

//Types
import { SingleEvent } from "@/types/eventType";

const BACKEND_BASE_URL = env.BACKEND_URL;

// This file consistes all the controller functions for filters

export async function fetchEvents(): Promise<SingleEvent[]> {
  // This function is responsible for fetching events from DB

  try {
    const { data } = await axios.get(
      `${BACKEND_BASE_URL}/api/events?populate=picture`
    );
    return data.data;
  } catch (error) {
    return [];
  }
}
