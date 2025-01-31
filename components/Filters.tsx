"use client"; // Mark this as a Client Component

//Library Imports
import React, { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

//Types
import { FilterType } from "@/types/filterType";

//UI components
import Button from "./ui/button";

// Gateways
import { fetchFilters } from "../gateways/filterGateway";

import SkeletonLoader from "./ui/SkeletonLoader";

const Filters = ({ currentFilter }: { currentFilter: string }) => {
  //Hooks
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //States
  const [filters, setfilters] = useState<FilterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const data = await fetchFilters();
      setfilters(data);
      setIsLoading(false);
    }
    init();
  }, []);

  const handleFilterClick = useCallback(
    (category: string) => {
      // This Function will append the filter in URL params to preserv it after the reload
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", category);

      // Update the URL with the new query parameters
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

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
    <SkeletonLoader key={e} className="h-12 w-40" />
  ));
};

export default Filters;
