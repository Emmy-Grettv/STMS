'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  MapPin,
  Clock,
  CheckCircle2,
  FileText,
  Eye,
  ArrowRight
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
}

export default function AdminOverviewPage() {
  const [bookings] = useState<Booking[]>([
    {
      id: '1',
      source: 'Groupe Scolaire de Kigali',
      destination: 'Kigali Genocide Memorial',
      category: 'History & Memorials',
      visitorType: 'School / Group',
      date: '2026-03-15',
      status: 'pending',
    },
    {
      id: '2',
      source: 'Jean Mugabo',
      destination: 'Volcanoes National Park',
      category: 'Nature & Wildlife',
      visitorType: 'Individual Visitor',
      date: '2026-03-20',
      status: 'accepted',
    },
    {
      id: '3',
      source: 'Rwanda ICT Chamber',
      destination: 'kLab Innovation Hub',
      category: 'Innovation & Tech Hubs',
      visitorType: 'Institution',
      date: '2026-04-01',
      status: 'pending',
    },
  ]);

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

        {/* 4 Metric KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-semibold mb-1">
                Total Tour Sites
              </p>
              <h3 className="text-2xl font-bold text-slate-900">8</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1773CF] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-semibold mb-1">
                Total Bookings
              </p>
              <h3 className="text-2xl font-bold text-slate-900">7</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-semibold mb-1">
                Pending Requests
              </p>
              <h3 className="text-2xl font-bold text-slate-900">3</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-semibold mb-1">
                Completed Tours
              </p>
              <h3 className="text-2xl font-bold text-slate-900">1</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Recent Bookings List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900">
              Recent Bookings
            </h2>
            <Link
              href="/dashboard/admin/bookings"
              className="text-xs font-semibold text-[#1773CF] hover:underline inline-flex items-center gap-1"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {bookings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-slate-200/80 p-4 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-xs font-bold text-slate-800">
                      {item.source} <span className="text-slate-400 font-normal">→</span> {item.destination}
                    </h3>
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {item.visitorType}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {item.date} • <span className="text-slate-500">{item.category}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
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
                  <Link
                    href={`/dashboard/admin/bookings/${item.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1773CF] hover:underline px-2.5 py-1 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> View details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
