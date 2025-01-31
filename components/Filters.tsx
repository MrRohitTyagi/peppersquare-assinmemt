import React from "react";
import Button from "./ui/button";
type FiltersProps = {};
const Filters = (props: FiltersProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-2 mb-8">
        <Button variant="outline" className="rounded-full px-4 py-1">
          Patriotism day
        </Button>
        <Button variant="outline" className="rounded-full px-4 py-1">
          Annual day
        </Button>
        <Button variant="outline" className="rounded-full px-4 py-1">
          Sports day
        </Button>
        <Button variant="outline" className="rounded-full px-4 py-1">
          NCC (National cadet corps)
        </Button>
        <Button variant="outline" className="rounded-full px-4 py-1">
          Science exhibition
        </Button>
        <Button variant="outline" className="rounded-full px-4 py-1">
          Alumni association
        </Button>
        <Button variant="outline" className="rounded-full px-4 py-1">
          Cleanliness drive
        </Button>
      </div>
    </div>
  );
};

export default Filters;
