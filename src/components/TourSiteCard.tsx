"use client";

import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

export interface TourSite {
  id: string;
  image: string;
  location: string;
  name: string;
  category?: string;
  description: string;
  rating: number;
  reviews: number;
  price: string;
  isFree: boolean;
  href?: string;
}

interface TourSiteCardProps {
  site: TourSite;
  className?: string;
}

export default function TourSiteCard({ site, className = "" }: TourSiteCardProps) {
  const targetHref = site.href || `/sites/${site.id}`;

  return (
    <Link
      href={targetHref}
      className={`bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col group ${className}`}
    >
      <div className="relative h-44 overflow-hidden bg-gray-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop";
          }}
        />
      </div>
      <div className="p-3.5 flex flex-col gap-1.5 flex-1">
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <MapPinIcon className="w-3.5 h-3.5 shrink-0 text-gray-400" />
          <span className="truncate">{site.location}</span>
        </div>
        <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#1565C0] transition-colors">
          {site.name}
        </p>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
          {site.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-2.5 border-t border-gray-50">
          <div className="flex items-center gap-1">
            <StarSolid className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <span className="text-xs font-medium text-gray-700">{site.rating}</span>
            <span className="text-xs text-gray-400">({site.reviews})</span>
          </div>
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              site.isFree
                ? "bg-green-100 text-green-700"
                : "bg-blue-50 text-[#1565C0]"
            }`}
          >
            {site.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
