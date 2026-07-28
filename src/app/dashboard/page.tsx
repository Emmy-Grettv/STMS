"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  MapPin,
  Calendar,
  Ticket,
  CheckCircle2,
  Clock,
  PlusCircle,
  QrCode,
  ArrowRight,
  LogOut,
  Building2,
  Compass,
  Star,
  Download,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<"bookings" | "saved" | "profile">("bookings");

  const userName = user?.name || "Visitor Account";
  const userEmail = user?.email || "visitor@example.com";
  const userRole = user?.role || "Individual Visitor";
  const userDistrict = user?.district || "Kigali, Rwanda";

  const sampleBookings = [
    {
      id: "STMS-2026-001",
      siteName: "Inyambo Cultural Village",
      category: "Cultural Heritage",
      date: "August 12, 2026",
      visitorsCount: 4,
      totalPrice: "8,000 RWF",
      status: "Confirmed",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "STMS-2026-002",
      siteName: "Kigali Genocide Memorial",
      category: "History & Memorials",
      date: "September 05, 2026",
      visitorsCount: 2,
      totalPrice: "Free Tour",
      status: "Pending Approval",
      image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <header className="bg-[#1773CF] pb-4 px-4 shadow-sm">
        <Navbar />
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#1773CF] to-[#1565C0] rounded-3xl p-6 sm:p-8 text-white shadow-md mb-8 relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-2xl font-bold shadow-inner">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    Welcome back, {userName}!
                  </h1>
                  <span className="text-[10px] font-bold bg-[#3B9B63] text-white px-2.5 py-0.5 rounded-full capitalize">
                    {userRole}
                  </span>
                </div>
                <p className="text-xs text-blue-100 mt-1 flex items-center gap-2">
                  <span>{userEmail}</span> • <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {userDistrict}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/#categories"
                className="w-full sm:w-auto bg-white text-[#1773CF] hover:bg-blue-50 text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4" /> Book New Tour
              </Link>
            </div>
          </div>

          {/* Decorative Background Accent */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500">Upcoming Tours</span>
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1773CF] flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900">2</p>
            <p className="text-[11px] text-slate-400 mt-1">Scheduled study visits</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500">Completed Tours</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900">5</p>
            <p className="text-[11px] text-slate-400 mt-1">Sites successfully visited</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500">Total Visitors</span>
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900">6</p>
            <p className="text-[11px] text-slate-400 mt-1">Registered travelers</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500">Digital QR Passes</span>
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <QrCode className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900">2</p>
            <p className="text-[11px] text-slate-400 mt-1">Ready for check-in</p>
          </div>
        </div>

        {/* Content Tabs & Main Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Active Bookings & Lists (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-[#1773CF]" /> My Booked Study Tours
                </h2>
                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === "bookings"
                        ? "bg-white text-[#1773CF] shadow-xs"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setActiveTab("saved")}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === "saved"
                        ? "bg-white text-[#1773CF] shadow-xs"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Saved Sites
                  </button>
                </div>
              </div>

              {/* Bookings List */}
              <div className="space-y-4">
                {sampleBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-all gap-4 bg-slate-50/40"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-slate-200 overflow-hidden shrink-0">
                        <img
                          src={booking.image}
                          alt={booking.siteName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1773CF] bg-blue-50 px-2 py-0.5 rounded-md">
                            {booking.category}
                          </span>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                              booking.status === "Confirmed"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 mt-1">
                          {booking.siteName}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-400" /> {booking.date}
                          </span>
                          <span>•</span>
                          <span>{booking.visitorsCount} Visitors</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-0 pt-3 sm:pt-0 border-slate-200">
                      <span className="text-sm font-bold text-slate-900">
                        {booking.totalPrice}
                      </span>
                      <button className="text-xs font-semibold text-[#1773CF] hover:underline flex items-center gap-1 mt-1">
                        <QrCode className="w-3.5 h-3.5" /> View Pass
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Discover Section */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#1773CF]" /> Popular Study Destinations
                </h2>
                <Link
                  href="/#categories"
                  className="text-xs font-semibold text-[#1773CF] hover:underline flex items-center gap-1"
                >
                  Explore All <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl border border-slate-200 hover:border-[#1773CF] transition-all flex items-center gap-3 group bg-slate-50/30">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1773CF] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1773CF] transition-colors">
                      Carnegie Mellon Univ. Rwanda
                    </h4>
                    <p className="text-[11px] text-slate-400">Kigali Innovation City</p>
                    <span className="text-[10px] font-semibold text-[#3B9B63] mt-1 inline-block">
                      Free Educational Tour
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 hover:border-[#1773CF] transition-all flex items-center gap-3 group bg-slate-50/30">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1773CF] transition-colors">
                      Nyungwe Canopy Walk
                    </h4>
                    <p className="text-[11px] text-slate-400">Southern Province</p>
                    <span className="text-[10px] font-semibold text-[#1773CF] mt-1 inline-block">
                      5,000 RWF / student
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Summary & Account Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <User className="w-5 h-5 text-[#1773CF]" /> Profile Summary
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Full Name</span>
                  <span className="font-semibold text-slate-800">{userName}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Email Address</span>
                  <span className="font-semibold text-slate-800">{userEmail}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Account Role</span>
                  <span className="font-semibold text-[#1773CF] capitalize">{userRole}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">District</span>
                  <span className="font-semibold text-slate-800">{userDistrict}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Download className="w-3.5 h-3.5" /> Download Visitor Badge
                </button>
                <button
                  onClick={logout}
                  className="w-full bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <LogOut className="w-3.5 h-3.5" /> Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
