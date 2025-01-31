"use client";

import React, { useMemo } from "react";
import Button from "./ui/button";
import Image from "next/image";
import { useEvents } from "@/store/events";
import SkeletonLoader from "./ui/SkeletonLoader";

const BASE_URL = "http://localhost:1337";

const Events = ({ currentFilter }: { currentFilter: string }) => {
  const { events, isLoading } = useEvents();

  const filteredEvents = useMemo(() => {
    return currentFilter === "ALL"
      ? events
      : events.filter((event) => {
          return event.category === currentFilter;
        });
  }, [currentFilter, events]);

  return (
    <div className="container mx-auto px-4 py-8 cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <EventsLoader />
        ) : (
          filteredEvents.map((event, index) => {
            const picture = event.picture[0].formats.small.url;
            return (
              <div
                key={index}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={BASE_URL + picture}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline">View more</Button>
      </div>
    </div>
  );
};

const EventsLoader = () => {
  return [1, 2, 3, 4, 5].map((e) => (
    <SkeletonLoader key={e} className="h-60 w-full" />
  ));
};

export default Events;
