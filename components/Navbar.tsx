import React from "react";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";

const logo = "http://localhost:1337/uploads/logo_0478f96bb1.png";

type NavbarProps = {};
const Navbar = (props: NavbarProps) => {
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
          <Button className="outline  outline-2 outline-red-500 text-black px-6 bg-transparent">
            CIR
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-6">
            Donate 🤍
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
