"use client";

import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1773CF] flex items-center justify-between px-4 sm:px-6 lg:px-8 relative py-2">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-[#1e88e5] rounded-xl flex items-center justify-center shadow-inner">
          <MapPinIcon className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white font-bold text-base tracking-wide">
            STMS
          </span>
          <span className="text-blue-200 text-xs font-light tracking-wider">
            Study Tour Rwanda
          </span>
        </div>
      </Link>

      {/* Nav Links */}
      <div className="hidden sm:flex items-center gap-4">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-200 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/auth/login"
          className="text-sm font-semibold text-blue-200 transition-colors duration-200"
        >
          Log In
        </Link>
        <Link
          href="/auth/register"
          className="bg-[#3B9B63] text-white text-sm font-semibold px-5 py-2 rounded-md shadow-sm"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg sm:hidden">
          <div className="flex flex-col px-4 py-4 gap-3">
            <Link
              href="/"
              className="text-sm font-semibold text-[#1773CF] transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/auth/login"
              className="text-sm font-semibold text-[#1773CF] transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/auth/register"
              className="bg-[#3B9B63] text-white text-sm font-semibold px-5 py-2 rounded-md shadow-sm text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}