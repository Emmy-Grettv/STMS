'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Bell,
  Search,
  Filter,
  X,
  Star,
  MapPin,
  Eye
} from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

interface TourSite {
  id: string;
  name: string;
  location: string;
  district: string;
  category: string;
  rating: number;
  image: string;
}

export default function AdminSitesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [districtFilter, setDistrictFilter] = useState('all');

  const [tourSites] = useState<TourSite[]>([
    {
      id: '1',
      name: 'Kigali Genocide Memorial',
      location: 'Gisozi, Kigali',
      district: 'Gasabo District',
      category: 'history',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: '2',
      name: 'Volcanoes National Park',
      location: 'Musanze District',
      district: 'Musanze District',
      category: 'nature',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: '3',
      name: "King's Palace Museum",
      location: 'Nyanza District',
      district: 'Nyanza District',
      category: 'cultural',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: '4',
      name: 'kLab Innovation Hub',
      location: 'Telecom House, Kigali',
      district: 'Nyarugenge District',
      category: 'innovation',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: '5',
      name: 'University of Rwanda - Huye Campus',
      location: 'Huye District',
      district: 'Huye District',
      category: 'education',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: '6',
      name: 'Inyambo Cultural Village',
      location: 'Nyagatare District',
      district: 'Nyagatare District',
      category: 'agriculture',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: '7',
      name: 'King Faisal Hospital',
      location: 'Kigali',
      district: 'Gasabo District',
      category: 'health',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: '8',
      name: 'CIMERWA Cement Factory',
      location: 'Rusizi District',
      district: 'Rusizi District',
      category: 'industry',
      rating: 4.0,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200',
    },
  ]);

  const filteredTourSites = useMemo(() => {
    return tourSites.filter((site) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        site.name.toLowerCase().includes(q) ||
        site.location.toLowerCase().includes(q) ||
        site.category.toLowerCase().includes(q) ||
        site.district.toLowerCase().includes(q);

      const matchesCategory = categoryFilter === 'all' || site.category === categoryFilter;
      const matchesDistrict = districtFilter === 'all' || site.district.toLowerCase().includes(districtFilter.toLowerCase());

      return matchesSearch && matchesCategory && matchesDistrict;
    });
  }, [tourSites, searchQuery, categoryFilter, districtFilter]);

  const resetFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setDistrictFilter('all');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Registered Tour Sites
            </h1>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              System overview and management
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#1773CF]" />
            </button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-lg border border-slate-200/80 p-4 mb-6 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Input with high visibility text-slate-400 placeholder */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search tour site name, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs text-slate-900 placeholder:text-slate-400 placeholder:font-medium rounded-lg border border-slate-200 bg-slate-50/50 outline-none focus:bg-white focus:border-[#1773CF] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full sm:w-auto">
              {/* Category Filter */}
              <div className="flex items-center gap-1.5 bg-slate-50/50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full text-xs bg-transparent outline-none font-medium text-slate-700 cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  <option value="history">History</option>
                  <option value="nature">Nature</option>
                  <option value="cultural">Cultural</option>
                  <option value="innovation">Innovation</option>
                  <option value="education">Education</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="health">Health</option>
                  <option value="industry">Industry</option>
                </select>
              </div>

              {/* District Filter */}
              <div className="flex items-center gap-1.5 bg-slate-50/50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={districtFilter}
                  onChange={(e) => setDistrictFilter(e.target.value)}
                  className="w-full text-xs bg-transparent outline-none font-medium text-slate-700 cursor-pointer"
                >
                  <option value="all">All Districts</option>
                  <option value="Kigali">Kigali</option>
                  <option value="Musanze">Musanze</option>
                  <option value="Nyanza">Nyanza</option>
                  <option value="Huye">Huye</option>
                  <option value="Nyagatare">Nyagatare</option>
                  <option value="Rusizi">Rusizi</option>
                </select>
              </div>
            </div>
          </div>

          {(searchQuery || categoryFilter !== 'all' || districtFilter !== 'all') && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-400 font-medium">Active filters:</span>
                {categoryFilter !== 'all' && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                    Category: {categoryFilter}
                  </span>
                )}
                {districtFilter !== 'all' && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                    District: {districtFilter}
                  </span>
                )}
              </div>
              <button
                onClick={resetFilters}
                className="text-[#1773CF] font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Registered Tour Sites List */}
        <div className="space-y-3">
          {filteredTourSites.length === 0 ? (
            <div className="bg-white rounded-lg border border-slate-200/80 p-8 text-center text-xs text-slate-400">
              No tour sites match your search and filter criteria.
            </div>
          ) : (
            filteredTourSites.map((site) => (
              <div
                key={site.id}
                className="bg-white rounded-lg border border-slate-200/80 p-4 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Thumbnail Image */}
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-12 h-12 rounded-lg object-cover bg-slate-100 shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {site.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">
                      {site.location} <span className="text-slate-300">·</span> <span className="text-slate-500 font-normal">{site.category}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{site.rating}</span>
                  </div>

                  <Link
                    href={`/dashboard/admin/sites/${site.id}`}
                    className="text-xs font-semibold text-[#1773CF] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-100 hover:underline px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> View
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
