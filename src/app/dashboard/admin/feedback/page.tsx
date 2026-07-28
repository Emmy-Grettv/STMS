'use client';

import { useState, useMemo } from 'react';
import { Bell, Star, Search, Filter, X } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

interface FeedbackItem {
  id: string;
  author: string;
  siteName: string;
  date: string;
  rating: number;
  text: string;
}

export default function AdminFeedbackPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState<string>('all');

  const [feedbackList] = useState<FeedbackItem[]>([
    {
      id: '1',
      author: 'Jean Mugabo',
      siteName: 'Volcanoes National Park',
      date: '2026-02-28',
      rating: 5,
      text: 'Incredible experience! The gorilla trek was unforgettable. Highly recommend for all visitors.',
    },
    {
      id: '2',
      author: 'Lycée de Kigali',
      siteName: "King's Palace Museum",
      date: '2026-02-25',
      rating: 3,
      text: 'Very educational for our students. The guide was knowledgeable. Would love more interactive exhibits.',
    },
    {
      id: '3',
      author: 'Groupe Scolaire de Kigali',
      siteName: 'Kigali Genocide Memorial',
      date: '2026-03-16',
      rating: 5,
      text: 'Exceptional tour experience at Kigali Genocide Memorial. Very educational and deeply moving for all students and faculty.',
    },
    {
      id: '4',
      author: 'Rwanda ICT Chamber',
      siteName: 'kLab Innovation Hub',
      date: '2026-04-02',
      rating: 4,
      text: 'Inspirational visit to kLab. Great exposure to local tech startups, incubation programs, and practical software engineering.',
    },
    {
      id: '5',
      author: 'Inyange Primary School',
      siteName: 'Nyungwe Canopy Walkway',
      date: '2026-04-12',
      rating: 5,
      text: 'Breathtaking scenery and world-class nature guides. Our students learned immensely about eco-tourism and forest conservation.',
    },
  ]);

  const filteredFeedback = useMemo(() => {
    return feedbackList.filter((fb) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        fb.author.toLowerCase().includes(q) ||
        fb.siteName.toLowerCase().includes(q) ||
        fb.text.toLowerCase().includes(q) ||
        fb.date.includes(q);

      const matchesRating =
        ratingFilter === 'all' || fb.rating === parseInt(ratingFilter, 10);

      return matchesSearch && matchesRating;
    });
  }, [feedbackList, searchQuery, ratingFilter]);

  const resetFilters = () => {
    setSearchQuery('');
    setRatingFilter('all');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Admin Dashboard
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

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-slate-900">
            Visitors Feedback
          </h2>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-lg border border-slate-200/80 p-4 mb-6 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search feedback by visitor, tour site, text..."
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

            {/* Rating Filter Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-xs text-slate-500 font-medium shrink-0">Rating:</span>
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50/50 outline-none focus:bg-white focus:border-[#1773CF] transition-colors font-medium text-slate-700 cursor-pointer"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars ★★★★★</option>
                <option value="4">4 Stars ★★★★☆</option>
                <option value="3">3 Stars ★★★☆☆</option>
                <option value="2">2 Stars ★★☆☆☆</option>
                <option value="1">1 Star ★☆☆☆☆</option>
              </select>
            </div>
          </div>

          {(searchQuery || ratingFilter !== 'all') && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-400 font-medium">Active filters:</span>
                {ratingFilter !== 'all' && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                    Rating: {ratingFilter} Stars
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

        {/* Visitors Feedback List matching screenshot mockup */}
        <div className="space-y-4">
          {filteredFeedback.length === 0 ? (
            <div className="bg-white rounded-lg border border-slate-200/80 p-8 text-center text-xs text-slate-400">
              No visitor feedback matches your search and rating criteria.
            </div>
          ) : (
            filteredFeedback.map((fb) => (
              <div
                key={fb.id}
                className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-xs transition-colors"
              >
                {/* Card Top Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {fb.author}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {fb.siteName} <span className="text-slate-300">·</span> {fb.date}
                    </p>
                  </div>

                  {/* 5 Star Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= fb.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-100 text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Feedback Text Content */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {fb.text}
                </p>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
