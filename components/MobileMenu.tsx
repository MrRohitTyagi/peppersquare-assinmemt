"use client";

// Library imports
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// UI Components
import Button from "@/components/ui/Button";

// Constants
import { navitems } from "@/helpers/constants";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 "
      >
        {isMenuOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 bg-white shadow-md z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navitems.map((item, i) => {
              return (
                <Link
                  key={i}
                  href="/"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 gap-4">
              <Button className="rounded-sm outline outline-2 outline-red-500 text-black p-2 bg-transparent">
                CIR
              </Button>
              <Button className="bg-red-500 rounded-sm hover:bg-red-600 text-white p-3">
                Donate 🤍
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
