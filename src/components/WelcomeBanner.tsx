"use client";

import React from "react";
import Link from "next/link";
import { MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface WelcomeBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export default function WelcomeBanner({
  title = "Welcome to the Study Tour Management System",
  description = "Explore educational tour destinations across Rwanda. Schools, institutions, and individuals can now easily discover, book, and manage study tours online.",
  ctaText = "Explore",
  ctaHref = "/explore",
  icon: Icon = MapPinIcon,
  className = "",
}: WelcomeBannerProps) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="bg-gray-100 border border-blue-100 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-gray-500" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-md font-semibold text-gray-900">{title}</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 font-sans">
              {description}
            </p>
          </div>
        </div>
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="shrink-0 inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#1976D2] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            {ctaText} <ArrowRightIcon className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
