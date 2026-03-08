'use client';

import Link from "next/link";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  StarIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { icon: MapPinIcon, value: "71+", label: "Tour Sites" },
  { icon: UserGroupIcon, value: "2,400+", label: "Visitors Served" },
  { icon: GlobeAltIcon, value: "30", label: "Districts Covered" },
];

const iconColors = ["#1565C0", "#3B9B63", "#F4B625"];

const categories = [
  { name: "Education & Schools", count: 12 },
  { name: "Cultural Heritage", count: 8 },
  { name: "Nature & Wildlife", count: 15 },
  { name: "Innovation & Tech Hubs", count: 6 },
  { name: "Agriculture & Farms", count: 10 },
  { name: "Health & Medical", count: 4 },
  { name: "Industry & Manufacturing", count: 7 },
  { name: "History & Memorials", count: 9 },
];

const tourSites = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Kigali_Genocide_Memorial.jpg/800px-Kigali_Genocide_Memorial.jpg",
    location: "Gisozi, Kigali",
    name: "Kigali Genocide Memorial",
    description: "Memorial and education center documenting the 1994 Genocide against the Tutsi",
    rating: 4.8,
    reviews: 346,
    price: "Free",
    isFree: true,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mountain_gorilla_%28Gorilla_beringei_beringei%29.jpg/800px-Mountain_gorilla_%28Gorilla_beringei_beringei%29.jpg",
    location: "Musanze District",
    name: "Volcanoes National Park",
    description: "Home to mountain gorillas — guided treks through volcanic terrain",
    rating: 4.9,
    reviews: 567,
    price: "From 1,500 RWF",
    isFree: false,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Nyanza_Royal_Palace_Museum.jpg/800px-Nyanza_Royal_Palace_Museum.jpg",
    location: "Nyanza District",
    name: "King's Palace Museum",
    description: "Traditional royal palace showcasing Rwanda's pre-colonial heritage",
    rating: 4.7,
    reviews: 213,
    price: "From 500 RWF",
    isFree: false,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Klab_Innovation_Hub.jpg/800px-Klab_Innovation_Hub.jpg",
    location: "Telecom House, Kigali",
    name: "kLab Innovation Hub",
    description: "Rwanda's first open tech hub for entrepreneurs and developers",
    rating: 4.6,
    reviews: 189,
    price: "From 2,000 RWF",
    isFree: false,
  },
];


      
// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
     <section className="bg-[#1773CF] pb-8 flex flex-col items-center px-4 shadow-[0_10px_30px_rgba(0,0,0,0.20)] relative z-10">
      <Navbar />
        {/* Search bar */}
        <div className="w-full max-w-2xl">
          <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-lg">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search for tour sites, destinations, categories..."
              className="flex-1 text-sm text-gray-700 outline-none placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>
      </section>

      {/* Headline */}
      <section className="bg-[#1773CF] pt-8 pb-16 flex flex-col items-center gap-6 px-4">
        <div className="text-center mt-4 flex flex-col items-center gap-4 max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Discover Rwanda's Study Tour Destinations
          </h1>
          <p className="text-blue-100 text-base leading-relaxed">
            Connect with educational sites, cultural heritage destinations, innovation hubs, and nature reserves across Rwanda. Book, learn, and grow.
          </p>
          <Link
            href="/register"
            className="mt-2 inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-200 shadow-md"
          >
            Get Started <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-gray-200">
        <div className=" mx-auto px-8 py-7 grid grid-cols-3 ">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div key={label} className="flex flex-col items-center">
              <Icon className="w-7 h-7  mb-1" style={{ color: iconColors[index] }}/>
              <span className="text-2xl font-bold text-gray-900">{value}</span>
              <span className="text-xs text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Welcome Banner ── */}
      <section className="w-full h-20 mx-auto px-25 mt-8">
        <div className="bg-gray-100 border border-blue-100 rounded-xl flex items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <MapPinIcon className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <p className="text-md font-semibold text-gray-900">Welcome to the Study Tour Management System</p>
              <p className="text-sm text-gray-500 mt-0.5 font-sans">
                Explore educational tour destinations across Rwanda. Schools, institutions, and individuals can now easily discover, book, and manage study tours online.
              </p>
            </div>
          </div>
          <Link
            href="/explore"
            className="shrink-0 inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#1976D2] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-200"
          >
            Explore <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Browse by Category ── */}
      <section className="w-full mx-auto mt-10 px-25">
        <h2 className="text-gray-900 font-bold text-lg mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map(({ name, count }) => (
            <Link
              key={name}
              href="#"
              className="bg-white border border-gray-200 rounded-lg px-15 py-3 hover:border-[#1565C0] hover:shadow-sm transition-all duration-200 group"
            >
              <p className="text-sm font-medium text-gray-800 group-hover:text-[#1565C0] transition-colors">{name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{count} sites</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── All Tour Sites ── */}
      <section className="w-full mx-auto px-25 mt-10 mb-12">
        <h2 className="text-gray-900 font-bold text-lg mb-4">All Tour Sites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tourSites.map((site) => (
            <Link
              key={site.name}
              href="#"
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden bg-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/400x300/e5e7eb/9ca3af?text=No+Image";
                  }}
                />
              </div>
              <div className="p-3 flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <MapPinIcon className="w-3 h-3 shrink-0" />
                  {site.location}
                </div>
                <p className="text-sm font-semibold text-gray-900 leading-snug">{site.name}</p>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{site.description}</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-center gap-1">
                    <StarSolid className="w-3.5 h-3.5 text-yellow-400" />
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
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
