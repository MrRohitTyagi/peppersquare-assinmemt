"use client";

import { FilterType } from "@/types/filterType";

const BASE_URL = "http://localhost:1337";

export async function fetchFilters(): Promise<FilterType[]> {
  const res = await fetch(`${BASE_URL}/api/filters`, {
    // cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}
