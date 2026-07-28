'use client';

import { useState } from "react";
import Link from "next/link";
import {
  MapPinIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import StatCard from "@/components/StatCard";
import WelcomeBanner from "@/components/WelcomeBanner";
import CategoryCard, { Category } from "@/components/CategoryCard";
import TourSiteCard, { TourSite } from "@/components/TourSiteCard";

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { icon: MapPinIcon, value: "71+", label: "Tour Sites", iconColor: "#1565C0" },
  { icon: UserGroupIcon, value: "2,400+", label: "Visitors Served", iconColor: "#3B9B63" },
  { icon: GlobeAltIcon, value: "30", label: "Districts Covered", iconColor: "#F4B625" },
];

const categories: Category[] = [
  { id: "edu", name: "Education & Schools", count: 12 },
  { id: "culture", name: "Cultural Heritage", count: 8 },
  { id: "nature", name: "Nature & Wildlife", count: 15 },
  { id: "tech", name: "Innovation & Tech Hubs", count: 6 },
  { id: "agri", name: "Agriculture & Farms", count: 10 },
  { id: "health", name: "Health & Medical", count: 4 },
  { id: "industry", name: "Industry & Manufacturing", count: 7 },
  { id: "history", name: "History & Memorials", count: 9 },
];

const allTourSites: TourSite[] = [
  {
    id: "1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Kigali_Genocide_Memorial.jpg/800px-Kigali_Genocide_Memorial.jpg",
    location: "Gisozi, Kigali",
    name: "Kigali Genocide Memorial",
    category: "History & Memorials",
    description: "Memorial and education center documenting the 1994 Genocide against the Tutsi",
    rating: 4.8,
    reviews: 346,
    price: "Free",
    isFree: true,
  },
  {
    id: "2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mountain_gorilla_%28Gorilla_beringei_beringei%29.jpg/800px-Mountain_gorilla_%28Gorilla_beringei_beringei%29.jpg",
    location: "Musanze District",
    name: "Volcanoes National Park",
    category: "Nature & Wildlife",
    description: "Home to mountain gorillas — guided treks through volcanic terrain",
    rating: 4.9,
    reviews: 567,
    price: "From 1,500 RWF",
    isFree: false,
  },
  {
    id: "3",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Nyanza_Royal_Palace_Museum.jpg/800px-Nyanza_Royal_Palace_Museum.jpg",
    location: "Nyanza District",
    name: "King's Palace Museum",
    category: "Cultural Heritage",
    description: "Traditional royal palace showcasing Rwanda's pre-colonial heritage",
    rating: 4.7,
    reviews: 213,
    price: "From 500 RWF",
    isFree: false,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop",
    location: "Telecom House, Kigali",
    name: "kLab Innovation Hub",
    category: "Innovation & Tech Hubs",
    description: "Rwanda's first open tech hub for entrepreneurs and developers",
    rating: 4.6,
    reviews: 189,
    price: "From 2,000 RWF",
    isFree: false,
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop",
    location: "Huye District",
    name: "University of Rwanda - Huye Campus",
    category: "Education & Schools",
    description: "Historic university campus with research centers, labs, and botanical gardens",
    rating: 4.5,
    reviews: 142,
    price: "Free",
    isFree: true,
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop",
    location: "Nyanza District",
    name: "Inyambo Cultural Village",
    category: "Cultural Heritage",
    description: "Traditional village featuring royal long-horned Inyambo cattle and heritage tours",
    rating: 4.8,
    reviews: 98,
    price: "From 1,000 RWF",
    isFree: false,
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop",
    location: "Kigali",
    name: "King Faisal Hospital",
    category: "Health & Medical",
    description: "Leading medical center providing clinical education tours and research facilities",
    rating: 4.4,
    reviews: 76,
    price: "Free",
    isFree: true,
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
    location: "Masaka, Kigali",
    name: "Inyange Industries Factory",
    category: "Industry & Manufacturing",
    description: "Modern food processing plant open for industrial study tours",
    rating: 4.3,
    reviews: 65,
    price: "From 500 RWF",
    isFree: false,
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null); // Toggle off filter if clicked again
    } else {
      setSelectedCategory(categoryName);
    }
  };

  const filteredTourSites = allTourSites.filter((site) => {
    const matchesCategory = selectedCategory
      ? site.category === selectedCategory
      : true;
    const matchesSearch = searchQuery
      ? site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (site.category && site.category.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <section className="bg-[#1773CF] pb-8 flex flex-col items-center px-4 shadow-[0_10px_30px_rgba(0,0,0,0.20)] relative z-10 mt-2 sm:mt-0">
        <Navbar />
        {/* Reusable Search bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          className="mt-4 sm:mt-0"
        />
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
            href="/auth/register"
            className="mt-2 inline-flex items-center gap-2 bg-[#3B9B63] hover:bg-[#2e7d4f] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-200 shadow-md"
          >
            Get Started <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      {/* ── Welcome Banner ── */}
      <WelcomeBanner className="mt-8" />

      {/* ── Browse by Category ── */}
      <section className="w-full max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900 font-bold text-lg">Browse by Category</h2>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs font-semibold text-[#1565C0] hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.name}
              category={cat}
              isSelected={selectedCategory === cat.name}
              onSelect={() => handleCategorySelect(cat.name)}
            />
          ))}
        </div>
      </section>

      {/* ── All Tour Sites / Filtered List ── */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-12">
        <h2 className="text-gray-900 font-bold text-lg mb-4">
          {selectedCategory ? `${selectedCategory}` : "All Tour Sites"}
        </h2>
        
        {filteredTourSites.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center my-4">
            <p className="text-gray-500 text-sm">No tour sites found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-[#1565C0] font-semibold hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredTourSites.map((site) => (
              <TourSiteCard key={site.id} site={site} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
