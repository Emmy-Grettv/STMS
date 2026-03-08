import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-[#1773CF] flex items-center justify-between px-25 ">
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
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-200 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/login"
          className="text-sm font-semibold text-blue-200 transition-colors duration-200"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="bg-[#3B9B63] text-white text-sm font-semibold px-5 py-2 rounded-md shadow-sm"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}