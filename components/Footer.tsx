//Library Imports
import Image from "next/image";
import Link from "next/link";

//UI Components
import Button from "@/components/ui/Button";

//Assets
import Twitter from "@/public/assets/Twitter";
import Instagram from "@/public/assets/Instagram";
import Facebook from "@/public/assets/Facebook";
import Youtube from "@/public/assets/Youtube";
import LinkedIn from "@/public/assets/LinkedIn";

import logo from "/public/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Image
                src={logo}
                alt="DBTR Logo"
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">
                  DBTR National Higher Secondary School
                </h3>
                <p className="text-blue-600 font-medium">
                  Virtuousness is Life
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Established in 1901, DBTR is situated in the temple town of
              Mayiladuthurai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">QUICK LINKS</h4>
            <nav className="space-y-2">
              <Link
                href="#"
                className="block text-gray-600 hover:text-gray-900"
              >
                Admissions
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-gray-900"
              >
                Alumni association
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-gray-900"
              >
                Donate
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-gray-900"
              >
                Events
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">CONTACT</h4>
            <div className="space-y-2 text-gray-600">
              <p>DBTR NHSS,</p>
              <p>Mahadana Street,</p>
              <p>Kamarajar Salai,</p>
              <p>Mayiladuthurai,</p>
              <p>Tamilnadu – 609001</p>
              <p className="pt-2">+91.436.422.3272</p>
              <Link
                href="mailto:tyagi4366@gmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                tyagi4366@gmail.com
              </Link>
            </div>
          </div>

          {/* Donate */}
          <div className="space-y-4">
            <p className="text-xl font-medium">
              Big or small, you can make an impact.
            </p>
            <Button className="rounded-sm bg-red-500 hover:bg-red-600 text-white px-6">
              Donate 🤍
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>© DBTR 2023, All Rights Reserved</span>
              <Link href="#" className="hover:text-gray-900">
                Sitemap
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <LinkedIn />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Designer Credit */}
          <div className="text-sm text-gray-600">
            Designed by{" "}
            <Link href="#" className="font-medium">
              PEPPER <span className="text-red-500">SQUARE</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
