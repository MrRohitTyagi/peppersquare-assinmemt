"use client";

//Library Imports
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

//UI components
import Button from "./ui/Button";

//Hooks
import useQuery from "@/hooks/useQuery";

import SkeletonLoader from "./ui/SkeletonLoader";
import { useFilters } from "@/store/filters";

const Filters = () => {
  //Hooks
  const router = useRouter();
  const currentFilter = useQuery("category") || "ALL";
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //States
  const { error, filters, isLoading } = useFilters();

  const handleFilterClick = (category: string) => {
    // This Function will append the filter in URL params to preserv it after the reload
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);

    // Update the URL with the new query parameters
    router.push(`${pathname}?${params.toString()}`);
  };

  if (error) {
    return <div className="text-center text-red-500 text-lg py-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-2 mb-8">
        {isLoading ? (
          <FilterLoader />
        ) : (
          filters.map((filter) => {
            const isActive = currentFilter === filter.category;
            return (
              <Button
                key={filter.title}
                className="rounded-3xl"
                variant={isActive ? "selected" : "outline"}
                onClick={() => handleFilterClick(filter.category)}
              >
                {filter.title}
              </Button>
            );
          })
        )}
      </div>
    </div>
  );
};

const FilterLoader = () => {
  return [1, 2, 3, 4, 5].map((e) => (
    <SkeletonLoader key={e} className="h-12 w-40 rounded-3xl" />
  ));
};

export default Filters;
