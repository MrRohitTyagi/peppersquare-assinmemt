import React from "react";
import Button from "./ui/button";
import Image from "next/image";

const BASE_URL = "http://localhost:1337";

type EventsProps = {};

type SingleEvent = {
  title: string;
  date: string;
  picture: { formats: { small: { url: string } } }[];
};
type EventsType = {
  data: SingleEvent[];
};

const res = await fetch(`${BASE_URL}/api/events?populate=picture`, {
  cache: "no-store",
});
const events: EventsType = await res.json();
console.log(`%c events `, "color: orange;border:2px solid cyan", events);

const Events = async (props: EventsProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.data &&
          events.data.map((event, index) => {
            const picture = event.picture[0].formats.small.url;
            return (
              <div
                key={index}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
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
          })}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline">View more</Button>
      </div>
    </div>
  );
};
// const events = [
//   {
//     title: "NCC (National cadet corps)",
//     date: "25 Jan 2024",
//     image: "/placeholder.svg",
//   },
//   {
//     title: "Science exhibition",
//     date: "24 Jan 2024",
//     image: "/placeholder.svg",
//   },
//   {
//     title: "Alumni association",
//     date: "23 Jan 2024",
//     image: "/placeholder.svg",
//   },
//   {
//     title: "Cleanliness drive",
//     date: "22 Jan 2024",
//     image: "/placeholder.svg",
//   },
//   {
//     title: "Plantation day",
//     date: "21 Jan 2024",
//     image: "/placeholder.svg",
//   },
//   {
//     title: "Annual day",
//     date: "20 Jan 2024",
//     image: "/placeholder.svg",
//   },
// ];

export default Events;
