import Image from "next/image";
import Link from "next/link";

// UI Components
import Button from "@/components/ui/Button";

// Constants
import { navitems } from "@/helpers/constants";

// Assets
import logo from "/public/assets/logo.png";

import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logo}
                alt="Logo"
                width={32}
                height={32}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="ml-10 flex items-baseline space-x-4">
              {navitems.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href="/"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button className="rounded-sm outline outline-2 outline-red-500 text-black p-2 bg-transparent">
              CIR
            </Button>
            <Button className="bg-red-500 rounded-sm hover:bg-red-600 text-white p-3">
              Donate 🤍
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
