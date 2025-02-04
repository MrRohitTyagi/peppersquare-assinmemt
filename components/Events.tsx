"use client";

//Library Imports
import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";

// UI components
import Button from "./ui/Button";
import FullscreenCarousel from "./ui/Carousel";

//Store
import { useEvents } from "@/store/events";

// Types
import { SingleEvent } from "@/types/eventType";

//Hooks
import useQuery from "@/hooks/useQuery";

import SkeletonLoader from "./ui/SkeletonLoader";

const Events = () => {
  const currentFilter = useQuery("category") || "ALL";

  const [activeEvent, setActiveEvent] = useState<{
    isOpen: boolean;
    pictures: string[];
  }>({
    isOpen: false,
    pictures: [],
  });
  const { events, isLoading, error } = useEvents();

  const filteredEvents = useMemo(() => {
    return currentFilter === "ALL"
      ? events
      : events.filter((event) => {
          return event.category === currentFilter;
        });
  }, [currentFilter, events]);

  const handleCarouselOpen = useCallback((event: SingleEvent) => {
    setActiveEvent({
      isOpen: true,
      pictures: event.picture.map((pic) => pic.formats.small.url),
    });
  }, []);

  const handleCarouselClose = useCallback(() => {
    setActiveEvent({ isOpen: false, pictures: [] });
  }, []);

  if (error) {
    return <div className="text-center text-red-500 text-lg py-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <EventsLoader />
        ) : (
          filteredEvents.map((event, index) => {
            // this returns relative URL , we have to concat it with out BE base URl
            const pictureUrl = event.picture[0].formats.small.url;
            return (
              <div
                onClick={() => {
                  handleCarouselOpen(event);
                }}
                key={index}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={pictureUrl}
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
        <Button className="border-2 border-red-500 text-red-500 rounded-sm">
          View more
        </Button>
      </div>
      {activeEvent.isOpen && (
        <FullscreenCarousel
          onClose={handleCarouselClose}
          images={activeEvent.pictures}
        />
      )}
    </div>
  );
};

const EventsLoader = () => {
  return [1, 2, 3, 4, 5].map((e) => (
    <SkeletonLoader key={e} className="h-60 w-full rounded-md" />
  ));
};

export default Events;
