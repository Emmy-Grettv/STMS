'use client';

import { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Shield,
  MapPin,
  Calendar,
  User,
  Mail,
  Phone,
  CreditCard,
  Building,
  Users,
  CheckCircle2,
  Clock,
  Home,
  LayoutDashboard,
  ClipboardList,
  MessageSquare,
  LogOut,
  Bell
} from 'lucide-react';

interface BookingDetail {
  id: string;
  source: string;
  destination: string;
  category: string;
  date: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  payment: string;
  paymentRef: string;
  visitorType: string;
  visitorsCount: number;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  district: string;
  totalCost: string;
}

const mockBookings: Record<string, BookingDetail> = {
  '1': {
    id: '1',
    source: 'Groupe Scolaire de Kigali',
    destination: 'Kigali Genocide Memorial',
    category: 'History & Memorials',
    date: '2026-03-15',
    status: 'pending',
    payment: '—',
    paymentRef: 'N/A',
    visitorType: 'School / Group',
    visitorsCount: 45,
    contactPerson: 'Mr. Alphonse Ndayisaba',
    contactEmail: 'admin@gskigali.rw',
    contactPhone: '+250 788 123 456',
    district: 'Gasabo District, Kigali',
    totalCost: '90,000 RWF',
  },
  '2': {
    id: '2',
    source: 'Jean Mugabo',
    destination: 'Volcanoes National Park',
    category: 'Nature & Wildlife',
    date: '2026-03-20',
    status: 'accepted',
    payment: 'MTN MoMo',
    paymentRef: 'MOMO-9874125',
    visitorType: 'Individual Visitor',
    visitorsCount: 2,
    contactPerson: 'Jean Mugabo',
    contactEmail: 'jean.mugabo@example.com',
    contactPhone: '+250 789 987 654',
    district: 'Nyarugenge District, Kigali',
    totalCost: '30,000 RWF',
  },
  '3': {
    id: '3',
    source: 'Rwanda ICT Chamber',
    destination: 'kLab Innovation Hub',
    category: 'Innovation & Tech Hubs',
    date: '2026-04-01',
    status: 'pending',
    payment: '—',
    paymentRef: 'N/A',
    visitorType: 'Institution',
    visitorsCount: 20,
    contactPerson: 'Dr. Sarah Keza',
    contactEmail: 'info@ictchamber.rw',
    contactPhone: '+250 788 555 777',
    district: 'Kicukiro District, Kigali',
    totalCost: '40,000 RWF',
  },
  '4': {
    id: '4',
    source: 'Lycée de Kigali',
    destination: "King's Palace Museum",
    category: 'Cultural Heritage',
    date: '2026-03-25',
    status: 'completed',
    payment: 'Bank Transfer (BK)',
    paymentRef: 'BK-00481729',
    visitorType: 'School / Group',
    visitorsCount: 60,
    contactPerson: 'Madame Claire Uwineza',
    contactEmail: 'contact@ldk.rw',
    contactPhone: '+250 788 222 333',
    district: 'Nyamirambo, Kigali',
    totalCost: '120,000 RWF',
  },
};

export default function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const booking = mockBookings[resolvedParams.id] || {
    id: resolvedParams.id,
    source: 'Study Tour Visitor',
    destination: 'Selected Destination Site',
    category: 'Educational Tour',
    date: '2026-04-15',
    status: 'pending',
    payment: 'MTN MoMo',
    paymentRef: 'REF-8839201',
    visitorType: 'Visitor Group',
    visitorsCount: 15,
    contactPerson: 'Official Representative',
    contactEmail: 'visitor@stms.rw',
    contactPhone: '+250 788 000 111',
    district: 'Kigali, Rwanda',
    totalCost: '45,000 RWF',
  };

  const handleLogout = () => {
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      {/* Dark Admin Sidebar - Preserved */}
      <aside className="w-64 bg-[#1E293B] text-slate-300 flex flex-col justify-between p-4 shrink-0 min-h-screen">
        <div>
          {/* Brand Header */}
          <div className="flex items-center gap-3 px-3 py-4 mb-6 border-b border-slate-700/60">
            <div className="w-9 h-9 rounded-lg bg-[#1773CF] flex items-center justify-center text-white shadow-sm shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white leading-tight">
                STMS Admin
              </h2>
              <p className="text-[11px] text-slate-400 font-medium">
                System Administrator
              </p>
            </div>
          </div>

          {/* Nav Menu Items */}
          <nav className="space-y-1">
            <Link
              href="/"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            <Link
              href="/dashboard/admin"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </Link>

            <Link
              href="/dashboard/admin"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold bg-slate-700/60 text-white transition-colors"
            >
              <ClipboardList className="w-4 h-4" />
              <span>All Bookings</span>
            </Link>

            <Link
              href="/dashboard/admin"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Tour Sites</span>
            </Link>

            <Link
              href="/dashboard/admin"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Feedback</span>
            </Link>
          </nav>
        </div>

        {/* Footer Admin Profile */}
        <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between px-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
              AD
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Admin</p>
              <p className="text-[10px] text-slate-400 font-medium">System Admin</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Log Out"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Details Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Bar with Back Button */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/dashboard/admin"
            className="text-xs font-semibold text-[#1773CF] hover:underline inline-flex items-center gap-1.5 py-2 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Bookings
          </Link>

          <button className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#1773CF]" />
          </button>
        </div>

        {/* Header Title */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
              <Link href="/dashboard/admin" className="hover:underline">Admin</Link>
              <span>/</span>
              <span>Bookings</span>
              <span>/</span>
              <span className="text-slate-900">#{booking.id}</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900">
              Booking Details #{booking.id}
            </h1>
          </div>

          {/* Read-Only Status Badge */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Status:</span>
            {booking.status === 'pending' && (
              <span className="px-3.5 py-1.5 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200/80 rounded-full inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Pending Approval
              </span>
            )}
            {booking.status === 'accepted' && (
              <span className="px-3.5 py-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/80 rounded-full inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Approved / Accepted
              </span>
            )}
            {booking.status === 'completed' && (
              <span className="px-3.5 py-1.5 text-xs font-bold text-sky-600 bg-sky-50 border border-sky-200/80 rounded-full inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Tour Completed
              </span>
            )}
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tour & Destination Overview */}
            <div className="bg-white rounded-lg border border-slate-200/80 p-6 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1773CF]" /> Tour Destination & Schedule
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Visitor / Group Name</span>
                  <span className="font-bold text-slate-900 text-sm">{booking.source}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Destination Site</span>
                  <span className="font-bold text-slate-900 text-sm">{booking.destination}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Category</span>
                  <span className="font-semibold text-slate-700">{booking.category}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Scheduled Date</span>
                  <span className="font-semibold text-slate-800 inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> {booking.date}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Group Size</span>
                  <span className="font-semibold text-slate-800 inline-flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-400" /> {booking.visitorsCount} Visitors
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Estimated Fee</span>
                  <span className="font-bold text-[#1773CF] text-sm">{booking.totalCost}</span>
                </div>
              </div>
            </div>

            {/* Representative & Contact Details */}
            <div className="bg-white rounded-lg border border-slate-200/80 p-6 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                <User className="w-4 h-4 text-[#1773CF]" /> Representative & Contact Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Contact Person</span>
                  <span className="font-semibold text-slate-900">{booking.contactPerson}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Visitor / School Type</span>
                  <span className="font-semibold text-slate-800">{booking.visitorType}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Email Address</span>
                  <span className="font-medium text-slate-800 inline-flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" /> {booking.contactEmail}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Phone Number</span>
                  <span className="font-medium text-slate-800 inline-flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" /> {booking.contactPhone}
                  </span>
                </div>

                <div className="sm:col-span-2">
                  <span className="text-slate-400 block mb-0.5">District / Address</span>
                  <span className="font-medium text-slate-800">{booking.district}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-6">
            {/* Payment Details */}
            <div className="bg-white rounded-lg border border-slate-200/80 p-6 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#1773CF]" /> Payment Details
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Payment Method</span>
                  <span className="font-semibold text-slate-900">{booking.payment}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Transaction Reference</span>
                  <span className="font-mono text-slate-700 bg-slate-100 px-2 py-1 rounded inline-block">
                    {booking.paymentRef}
                  </span>
                </div>
              </div>
            </div>

            {/* Admin Info Box */}
            <div className="bg-blue-50/60 rounded-lg border border-blue-100 p-5">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#1773CF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    Administrator Read-Only View
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    Booking status modifications and approvals are managed directly by tour site managers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
