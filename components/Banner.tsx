//Library Imports
import Image from "next/image";
import React from "react";

import env from "@/env";

const BACKEND_BASE_URL = env.BACKEND_URL;

const banner = `${BACKEND_BASE_URL}/uploads/science_exibition_5bcff026e1.png`;

const Banner = () => {
  return (
    <div className="relative h-[300px] flex items-center justify-center text-white">
      <Image
        src={banner}
        alt="Events Gallery Hero"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative text-center space-y-4 p-4">
        <h1 className="text-4xl md:text-5xl font-bold">Our events gallery</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base">
          Events at DBIT are filled with joyous occasions, cultural gatherings,
          and learning opportunities that bring us all together.
        </p>
      </div>
    </div>
  );
};

export default Banner;
