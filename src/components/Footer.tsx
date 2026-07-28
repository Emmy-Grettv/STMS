import Link from "next/link";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1f2e] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand Column */}
        <div className="flex flex-col gap-4        ">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="w-10 h-10 bg-[#1773CF] rounded-xl flex items-center justify-center ">
              <MapPinIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-base tracking-wide">
              STMS Rwanda
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-loose max-w-[300px] font-sans">
            Connecting learners with educational tour destinations across Rwanda for impactful study experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-base">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Register", href: "/auth/register" },
              { label: "Log In", href: "/auth/login" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-base">Categories</h3>
          <ul className="flex flex-col gap-3">
            {[
              "Education & Schools",
              "Cultural Heritage",
              "Nature & Wildlife",
              "Innovation Hubs",
            ].map((category) => (
              <li key={category}>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-base">Contact</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <EnvelopeIcon className="w-4 h-4 text-gray-400 shrink-0" />
              <a href="mailto:info@stms.rw" className="hover:text-white transition-colors duration-200">
                info@stms.rw
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <PhoneIcon className="w-4 h-4 text-gray-400 shrink-0" />
              <a href="tel:+250788000000" className="hover:text-white transition-colors duration-200">
                +250 788 000 000
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPinIcon className="w-4 h-4 text-gray-400 shrink-0" />
              <span>Kigali, Rwanda</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            © 2026 Study Tour Management System — Rwanda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}