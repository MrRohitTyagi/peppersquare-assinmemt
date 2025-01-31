"use client";

//Library Imports
import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";

// UI components
import Button from "./ui/button";
import FullscreenCarousel from "./ui/Carousel";

//Store
import { useEvents } from "@/store/events";

import env from "@/env";
// Types
import { SingleEvent } from "@/types/eventType";

import SkeletonLoader from "./ui/SkeletonLoader";

const BACKEND_BASE_URL = env.BACKEND_URL;

const Events = ({ currentFilter }: { currentFilter: string }) => {
  const [activeEvent, setActiveEvent] = useState<{
    isOpen: boolean;
    pictures: string[];
  }>({
    isOpen: false,
    pictures: [],
  });
  const { events, isLoading } = useEvents();

  const filteredEvents = useMemo(() => {
    return currentFilter === "ALL"
      ? events
      : events.filter((event) => {
          return event.category === currentFilter;
        });
  }, [currentFilter, events]);

  const handleCarouselOpen = useCallback((event: SingleEvent) => {
    console.log("event", event);
    setActiveEvent({
      isOpen: true,
      pictures: event.picture.map(
        (pic) => `${BACKEND_BASE_URL}${pic.formats.small.url}`
      ),
    });
  }, []);

  const handleCarouselClose = useCallback(() => {
    setActiveEvent({ isOpen: false, pictures: [] });
  }, []);

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
                    src={BACKEND_BASE_URL + pictureUrl}
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
    <SkeletonLoader key={e} className="h-60 w-full" />
  ));
};

export default Events;
