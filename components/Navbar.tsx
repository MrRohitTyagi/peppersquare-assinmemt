//Library Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";

// UI components
import Button from "./ui/Button";

import env from "@/env";

const BACKEND_BASE_URL = env.BACKEND_URL;

const logo = `${BACKEND_BASE_URL}/uploads/logo_0478f96bb1.png`;

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm hover:text-primary">
              The School
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Academics
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Life @ DBIT
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Contact us
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="rounded-sm outline outline-2 outline-red-500 text-black p-2 bg-transparent">
            CIR
          </Button>
          <Button className="bg-red-500 rounded-sm hover:bg-red-600 text-white p-3">
            Donate 🤍
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
