"use client";

import logo from "@/public/logo-intercom.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-[5vw] py-10 lg:py-10">
        {/* Logo */}
        <Link href="/" className="flex items-center z-[70]">
          <Image
            src={logo}
            alt="Intercom SIM Logo"
            width={160}
            height={60}
            className="w-20 lg:w-[5vw] h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-10 text-base font-medium bg-white/90 backdrop-blur-md px-10 py-3 rounded-full">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/intercom-sim-cards">
            <li>SIM Cards</li>
          </Link>
          <Link href="/active-cancel-sims">
            <li>Activate / Cancel SIMs</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <button className="btn__sytle">Contact Us</button>
          </Link>
        </div>

        {/* Mobile Open Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-white z-50"
          aria-label="Open menu"
        >
          <FiMenu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#111]/95 backdrop-blur-md lg:hidden">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-15 right-5 sm:top-6 sm:right-6 text-white"
            aria-label="Close menu"
          >
            <FiX size={28} />
          </button>

          {/* Menu Items */}
          <ul
            className="
        flex flex-col items-center justify-center
        h-full
        gap-6 sm:gap-8
        px-6
        text-lg sm:text-xl
        font-medium
        text-white
      "
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/intercom-sim-cards" onClick={() => setMenuOpen(false)}>
              SIM Cards
            </Link>

            <Link href="/active-cancel-sims" onClick={() => setMenuOpen(false)}>
              Activate / Cancel SIMs
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <button className="btn__sytle mt-6 w-full max-w-xs">
                Contact Us
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
