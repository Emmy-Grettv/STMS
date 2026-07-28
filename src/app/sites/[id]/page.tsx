'use client';

import { use } from "react";
import Link from "next/link";
import {
  MapPinIcon,
  ArrowLeftIcon,
  ClockIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";

// Database of tour sites
const siteDatabase: Record<string, {
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  hours: string;
  about: string;
  pricing: Array<{ label: string; price: string }>;
}> = {
  "6": {
    name: "Inyambo Cultural Village",
    location: "Nyagatare District, Nyagatare District",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop",
    rating: 4.4,
    reviews: 76,
    hours: "Mon–Sat: 7:00 AM – 5:00 PM",
    about: "Experience traditional Rwandan cattle culture with the famous Inyambo long-horned cattle. Learn about sustainable farming practices and Rwanda's deep agricultural heritage",
    pricing: [
      { label: "Individual", price: "2,000 RWF" },
      { label: "Student", price: "800 RWF" },
      { label: "Group", price: "600 RWF" },
    ],
  },
  "1": {
    name: "Kigali Genocide Memorial",
    location: "Gisozi, Kigali",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Kigali_Genocide_Memorial.jpg/800px-Kigali_Genocide_Memorial.jpg",
    rating: 4.8,
    reviews: 346,
    hours: "Mon–Sun: 8:00 AM – 5:00 PM",
    about: "Memorial and education center documenting the 1994 Genocide against the Tutsi, providing guided tours, historical archives, and educational programs.",
    pricing: [
      { label: "Individual", price: "Free" },
      { label: "Audio Guide", price: "2,000 RWF" },
      { label: "Group", price: "1,500 RWF" },
    ],
  },
};

export default function SiteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const siteId = resolvedParams.id;
  
  // Default to Inyambo Cultural Village ("6") if not specified
  const site = siteDatabase[siteId] || siteDatabase["6"];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans flex flex-col">
      {/* Header Banner with Navbar */}
      <header className="bg-[#1773CF] pb-4 px-4 shadow-sm">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top Back Link */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1565C0] hover:text-[#1976D2] transition-colors"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            Back to all sites
          </Link>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column (Span 8) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Image Banner */}
            <div className="relative h-72 sm:h-96 w-full rounded-lg overflow-hidden shadow-sm bg-slate-200 border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop";
                }}
              />
            </div>

            {/* Title & Metadata Header */}
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <MapPinIcon className="w-4 h-4 shrink-0 text-slate-400" />
                <span>{site.location}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {site.name}
              </h1>

              {/* Rating & Operating Hours */}
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <StarSolid className="w-4 h-4 text-amber-500" />
                  <span className="font-bold text-slate-900">{site.rating}</span>
                  <span className="text-slate-500">({site.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <ClockIcon className="w-4 h-4 text-slate-400" />
                  <span>{site.hours}</span>
                </div>
              </div>
            </div>

            {/* "About this site" Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <h2 className="text-sm font-bold text-slate-900 mb-2">About this site</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {site.about}
              </p>
            </div>

            {/* "Visiting Prices" Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <CreditCardIcon className="w-4 h-4 text-[#1773CF]" />
                <h2 className="text-sm font-bold text-slate-900">Visiting Prices</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {site.pricing.map((tier) => (
                  <div
                    key={tier.label}
                    className="bg-[#f1f5f9] rounded-lg p-4 text-center"
                  >
                    <p className="text-[11px] text-slate-500 font-medium mb-1">{tier.label}</p>
                    <p className="text-sm font-bold text-slate-900">{tier.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Span 4) */}
          <div className="lg:col-span-4 sticky top-6">
            <BookingCalendar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
