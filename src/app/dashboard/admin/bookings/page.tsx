'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Bell,
  Search,
  Filter,
  X,
  Eye,
  School,
  MapPin
} from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

interface Booking {
  id: string;
  source: string;
  destination: string;
  category: string;
  visitorType: string;
  date: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  payment: string;
}

export default function AdminBookingsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [visitorTypeFilter, setVisitorTypeFilter] = useState<string>('all');

  const [bookings] = useState<Booking[]>([
    {
      id: '1',
      source: 'Groupe Scolaire de Kigali',
      destination: 'Kigali Genocide Memorial',
      category: 'History & Memorials',
      visitorType: 'School / Group',
      date: '2026-03-15',
      status: 'pending',
      payment: '—',
    },
    {
      id: '2',
      source: 'Jean Mugabo',
      destination: 'Volcanoes National Park',
      category: 'Nature & Wildlife',
      visitorType: 'Individual Visitor',
      date: '2026-03-20',
      status: 'accepted',
      payment: 'MTN MoMo',
    },
    {
      id: '3',
      source: 'Rwanda ICT Chamber',
      destination: 'kLab Innovation Hub',
      category: 'Innovation & Tech Hubs',
      visitorType: 'Institution',
      date: '2026-04-01',
      status: 'pending',
      payment: '—',
    },
    {
      id: '4',
      source: 'Lycée de Kigali',
      destination: "King's Palace Museum",
      category: 'Cultural Heritage',
      visitorType: 'School / Group',
      date: '2026-03-25',
      status: 'completed',
      payment: 'BK',
    },
    {
      id: '5',
      source: 'Inyange Primary School',
      destination: 'Nyungwe Canopy Walkway',
      category: 'Nature & Wildlife',
      visitorType: 'School / Group',
      date: '2026-04-10',
      status: 'accepted',
      payment: 'MTN MoMo',
    },
    {
      id: '6',
      source: 'University of Rwanda',
      destination: 'Rubona Agricultural Station',
      category: 'Agriculture & Farms',
      visitorType: 'Student',
      date: '2026-04-18',
      status: 'pending',
      payment: '—',
    },
    {
      id: '7',
      source: 'BK TechHouse Ltd',
      destination: 'Inyange Industries Facility',
      category: 'Industry & Manufacturing',
      visitorType: 'Company',
      date: '2026-04-22',
      status: 'accepted',
      payment: 'BK',
    },
  ]);

  const filteredBookings = useMemo(() => {
    return bookings.filter((item) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.source.toLowerCase().includes(q) ||
        item.destination.toLowerCase().includes(q) ||
        item.id.includes(q) ||
        item.date.includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.visitorType.toLowerCase().includes(q);

      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
      const matchesVisitorType = visitorTypeFilter === 'all' || item.visitorType === visitorTypeFilter;

      return matchesSearch && matchesStatus && matchesCategory && matchesVisitorType;
    });
  }, [bookings, searchQuery, statusFilter, categoryFilter, visitorTypeFilter]);

  const resetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setCategoryFilter('all');
    setVisitorTypeFilter('all');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              All Bookings Management
            </h1>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Review and inspect study tour bookings
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            {/* Search Input with high visibility placeholder */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search visitor, site, date..."
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

            {/* Filter Dropdowns Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full lg:w-auto">
              {/* Filter 1: Status */}
              <div className="flex items-center gap-1.5 bg-slate-50/50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full text-xs bg-transparent outline-none font-medium text-slate-700 cursor-pointer"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              {/* Filter 2: Category */}
              <div className="flex items-center gap-1.5 bg-slate-50/50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full text-xs bg-transparent outline-none font-medium text-slate-700 cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  <option value="History & Memorials">History & Memorials</option>
                  <option value="Nature & Wildlife">Nature & Wildlife</option>
                  <option value="Innovation & Tech Hubs">Innovation & Tech Hubs</option>
                  <option value="Cultural Heritage">Cultural Heritage</option>
                  <option value="Agriculture & Farms">Agriculture & Farms</option>
                  <option value="Industry & Manufacturing">Industry & Manufacturing</option>
                </select>
              </div>

              {/* Filter 3: Visitor / School Type */}
              <div className="flex items-center gap-1.5 bg-slate-50/50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                <School className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={visitorTypeFilter}
                  onChange={(e) => setVisitorTypeFilter(e.target.value)}
                  className="w-full text-xs bg-transparent outline-none font-medium text-slate-700 cursor-pointer"
                >
                  <option value="all">All Visitor Types</option>
                  <option value="School / Group">School / Group</option>
                  <option value="Individual Visitor">Individual Visitor</option>
                  <option value="Institution">Institution</option>
                  <option value="Company">Company</option>
                  <option value="Student">Student</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Badges & Reset */}
          {(searchQuery || statusFilter !== 'all' || categoryFilter !== 'all' || visitorTypeFilter !== 'all') && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-400 font-medium">Active filters:</span>
                {statusFilter !== 'all' && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                    Status: {statusFilter}
                  </span>
                )}
                {categoryFilter !== 'all' && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                    Category: {categoryFilter}
                  </span>
                )}
                {visitorTypeFilter !== 'all' && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                    Type: {visitorTypeFilter}
                  </span>
                )}
              </div>
              <button
                onClick={resetFilters}
                className="text-[#1773CF] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* All Bookings Table */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-900 mb-4">
            Bookings List ({filteredBookings.length})
          </h2>

          <div className="bg-white rounded-lg border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-500 font-semibold">
                    <th className="py-3 px-4">Visitor</th>
                    <th className="py-3 px-4">Visitor Type</th>
                    <th className="py-3 px-4">Site & Category</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Payment</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400">
                        No bookings matching your search and filter criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-900">
                          {item.source}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium text-slate-700">
                            {item.visitorType}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          <span className="font-semibold text-slate-800 block">{item.destination}</span>
                          <span className="text-[11px] text-slate-400">{item.category}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500">
                          {item.date}
                        </td>
                        <td className="py-3.5 px-4">
                          {item.status === 'pending' && (
                            <span className="inline-block px-3 py-1 text-[11px] font-semibold text-amber-600 bg-amber-50 border border-amber-200/80 rounded-full">
                              pending
                            </span>
                          )}
                          {item.status === 'accepted' && (
                            <span className="inline-block px-3 py-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/80 rounded-full">
                              accepted
                            </span>
                          )}
                          {item.status === 'completed' && (
                            <span className="inline-block px-3 py-1 text-[11px] font-semibold text-sky-600 bg-sky-50 border border-sky-200/80 rounded-full">
                              completed
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-slate-500">
                          {item.payment}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <Link
                            href={`/dashboard/admin/bookings/${item.id}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1773CF] hover:text-[#1565C0] hover:underline px-2.5 py-1 rounded-lg hover:bg-slate-100/60 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" /> View details
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
