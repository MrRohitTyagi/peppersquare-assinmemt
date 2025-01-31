"use client";

import { useSearchParams } from "next/navigation";

type useQueryProps = string;

const useQuery = (searchKey: useQueryProps) => {
  const searchParams = useSearchParams();
  return searchParams.get(searchKey) || "";
};

export default useQuery;
