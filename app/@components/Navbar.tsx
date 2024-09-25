// components/Navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [navigation] = useState([
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ]);

  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 text-white text-lg">My Portfolio</div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } transition duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
