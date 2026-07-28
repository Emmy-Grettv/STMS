"use client";

import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  href?: string;
  className?: string;
}

export default function Logo({
  size = "md",
  variant = "light",
  href = "/",
  className = "",
}: LogoProps) {
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const containerSizes = {
    sm: "w-8 h-8 rounded-lg",
    md: "w-10 h-10 rounded-xl",
    lg: "w-12 h-12 rounded-xl",
  };

  const titleSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const subtitleSizes = {
    sm: "text-[10px]",
    md: "text-xs",
    lg: "text-sm",
  };

  const isLight = variant === "light";

  const content = (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div
        className={`${containerSizes[size]} bg-[#1e88e5] flex items-center justify-center shadow-inner shrink-0`}
      >
        <MapPinIcon className={`${iconSizes[size]} text-white`} />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-bold ${titleSizes[size]} tracking-wide ${
            isLight ? "text-white" : "text-[#1773CF]"
          }`}
        >
          STMS
        </span>
        <span
          className={`font-light ${subtitleSizes[size]} tracking-wider ${
            isLight ? "text-blue-200" : "text-gray-500"
          }`}
        >
          Study Tour Rwanda
        </span>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
