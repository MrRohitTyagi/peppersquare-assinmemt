// Library imports
import axios from "axios";

import env from "@/env";

//Types
import { FilterType } from "@/types/filterType";

const BACKEND_BASE_URL = env.BACKEND_URL;

// This file consistes all the controller functions for filters

export async function fetchFilters(): Promise<FilterType[]> {
  // This function is responsible for fetching filters from DB
  try {
    const { data } = await axios.get(`${BACKEND_BASE_URL}/api/filters`);
    return data.data;
  } catch (error) {
    throw new Error("Failed to fetch Filters, please try again later");
  }
}
