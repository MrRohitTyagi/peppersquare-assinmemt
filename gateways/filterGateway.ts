"use client";

import env from "@/env";
import { FilterType } from "@/types/filterType";

const BACKEND_BASE_URL = env.BACKEND_URL;

export async function fetchFilters(): Promise<FilterType[]> {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/api/filters`);
    const { data } = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}
