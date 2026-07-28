"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { useAuth } from "@/context/AuthContext";
import { User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="w-full bg-[#1773CF] flex items-center justify-between px-4 sm:px-6 lg:px-8 relative py-2.5">
      {/* Logo */}
      <Logo size="md" variant="light" />

      {/* Nav Links */}
      <div className="hidden sm:flex items-center gap-5">
        <Link
          href="/"
          className="text-xs font-semibold text-white/90 hover:text-white transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/#categories"
          className="text-xs font-semibold text-white/90 hover:text-white transition-colors duration-200"
        >
          Tour Sites
        </Link>

        {isAuthenticated && user ? (
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition-all border border-white/10"
            >
              <div className="w-6 h-6 rounded-full bg-[#3B9B63] flex items-center justify-center text-white text-xs font-bold">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <span className="max-w-[120px] truncate">{user.name}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3.5 py-2 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-900 truncate">{user.name}</p>
                  <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                  <span className="inline-block mt-1 text-[10px] font-semibold bg-blue-50 text-[#1773CF] px-2 py-0.5 rounded-full capitalize">
                    {user.role}
                  </span>
                </div>

                <Link
                  href="/dashboard"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4 text-[#1773CF]" />
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors text-left border-t border-slate-100"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="text-xs font-semibold text-white/90 hover:text-white transition-colors duration-200 px-3 py-1.5"
            >
              Log In
            </Link>
            <Link
              href="/auth/register"
              className="bg-[#3B9B63] hover:bg-[#328754] text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-sm transition-colors"
            >
              Sign Up
            </Link>
          </div>
        )}
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
        <div className="absolute top-16 left-0 right-0 bg-white border-t border-slate-100 shadow-xl sm:hidden z-50">
          <div className="flex flex-col px-4 py-4 gap-3">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-700 hover:text-[#1773CF] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {isAuthenticated && user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-xs font-semibold text-[#1773CF] py-2 flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LayoutDashboard className="w-4 h-4" /> Dashboard ({user.name})
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    logout();
                  }}
                  className="text-xs font-semibold text-red-600 py-2 flex items-center gap-2 text-left"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-xs font-semibold text-[#1773CF] py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-[#3B9B63] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}