'use client';

import { use } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Star,
  Users,
  Clock,
  Phone,
  Mail,
  Building,
  CheckCircle2,
  Calendar,
  FileText,
  Bell
} from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

interface SiteDetail {
  id: string;
  name: string;
  location: string;
  district: string;
  category: string;
  rating: number;
  image: string;
  description: string;
  managerName: string;
  contactEmail: string;
  contactPhone: string;
  capacity: string;
  operatingHours: string;
  entranceFee: string;
  totalBookings: number;
  facilities: string[];
}

const mockSites: Record<string, SiteDetail> = {
  '1': {
    id: '1',
    name: 'Kigali Genocide Memorial',
    location: 'Gisozi, Kigali',
    district: 'Gasabo District',
    category: 'history',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600',
    description: 'A place of remembrance and learning honoring the victims of the 1994 Genocide against the Tutsi in Rwanda. Features educational exhibitions, memorial gardens, and archival resources.',
    managerName: 'Jean-Paul Nsabimana',
    contactEmail: 'tours@kgm.rw',
    contactPhone: '+250 788 111 222',
    capacity: '200 visitors / session',
    operatingHours: '08:00 AM - 05:00 PM (Daily)',
    entranceFee: 'Free (Donations Welcome)',
    totalBookings: 142,
    facilities: ['Guided Audio Tours', 'Educational Hall', 'Parking Lot', 'Cafeteria', 'Wheelchair Access'],
  },
  '2': {
    id: '2',
    name: 'Volcanoes National Park',
    location: 'Musanze District',
    district: 'Musanze District',
    category: 'nature',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600',
    description: 'Home to the mountain gorillas and golden monkeys within the Virunga Massif. Ideal for eco-tours, biodiversity studies, and mountain hiking.',
    managerName: 'Claire Akamanzi',
    contactEmail: 'info@volcanoespark.rw',
    contactPhone: '+250 788 333 444',
    capacity: '80 visitors / day',
    operatingHours: '06:00 AM - 04:00 PM',
    entranceFee: '15,000 RWF (Student Group Rate)',
    totalBookings: 98,
    facilities: ['Park Rangers', 'Trekking Equipment Rental', 'Briefing Center', 'Visitor Lodge'],
  },
  '3': {
    id: '3',
    name: "King's Palace Museum",
    location: 'Nyanza District',
    district: 'Nyanza District',
    category: 'cultural',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
    description: 'A reconstruction of the traditional royal residence, showcasing Rwanda’s monarchical history and famous Inyambo royal cattle with sacred horns.',
    managerName: 'Emmanuel Habimana',
    contactEmail: 'cultural@kingspalace.rw',
    contactPhone: '+250 788 555 666',
    capacity: '120 visitors / session',
    operatingHours: '08:00 AM - 06:00 PM',
    entranceFee: '2,000 RWF / Student',
    totalBookings: 76,
    facilities: ['Traditional Inyambo Exhibit', 'Guided Cultural Shows', 'Gift Shop', 'Rest Areas'],
  },
  '4': {
    id: '4',
    name: 'kLab Innovation Hub',
    location: 'Telecom House, Kigali',
    district: 'Nyarugenge District',
    category: 'innovation',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
    description: 'Rwanda’s premier open technology space providing mentorship and networking for tech entrepreneurs, software developers, and students.',
    managerName: 'Grace Ingabire',
    contactEmail: 'contact@klab.rw',
    contactPhone: '+250 788 777 888',
    capacity: '50 visitors / session',
    operatingHours: '09:00 AM - 06:00 PM (Mon-Fri)',
    entranceFee: 'Free for Approved Educational Tours',
    totalBookings: 64,
    facilities: ['High-speed Wi-Fi', 'Presentation Auditorium', 'IoT Lab', 'Mentorship Rooms'],
  },
  '5': {
    id: '5',
    name: 'University of Rwanda - Huye Campus',
    location: 'Huye District',
    district: 'Huye District',
    category: 'education',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=600',
    description: 'Historic higher education institution featuring research laboratories, botanical gardens, and academic archives.',
    managerName: 'Prof. Eric Rutaremara',
    contactEmail: 'tours@ur.ac.rw',
    contactPhone: '+250 788 999 000',
    capacity: '300 visitors / day',
    operatingHours: '08:00 AM - 05:00 PM',
    entranceFee: 'Free',
    totalBookings: 52,
    facilities: ['Main Library', 'Science Labs', 'Auditorium', 'Botanical Walk'],
  },
  '6': {
    id: '6',
    name: 'Inyambo Cultural Village',
    location: 'Nyagatare District',
    district: 'Nyagatare District',
    category: 'agriculture',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=600',
    description: 'Living cultural site dedicated to pastoral traditions, cattle breeding, and indigenous agricultural techniques.',
    managerName: 'Moses Karangwa',
    contactEmail: 'info@inyambovillage.rw',
    contactPhone: '+250 788 123 789',
    capacity: '100 visitors / session',
    operatingHours: '07:30 AM - 05:30 PM',
    entranceFee: '3,000 RWF / Visitor',
    totalBookings: 39,
    facilities: ['Demonstration Farm', 'Cattle Milking Experience', 'Traditional Milk Hut'],
  },
  '7': {
    id: '7',
    name: 'King Faisal Hospital',
    location: 'Kigali',
    district: 'Gasabo District',
    category: 'health',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    description: 'Leading tertiary referral hospital providing specialized medical education tours for health sciences and medical students.',
    managerName: 'Dr. Alliance Mukabaranga',
    contactEmail: 'tours@kfh.rw',
    contactPhone: '+250 788 444 555',
    capacity: '30 visitors / session',
    operatingHours: '09:00 AM - 03:00 PM (By Appointment)',
    entranceFee: 'Free for Medical Students',
    totalBookings: 28,
    facilities: ['Simulation Center', 'Medical Library', 'Conference Hall'],
  },
  '8': {
    id: '8',
    name: 'CIMERWA Cement Factory',
    location: 'Rusizi District',
    district: 'Rusizi District',
    category: 'industry',
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    description: 'Rwanda’s primary cement manufacturing plant offering industrial study tours on heavy machinery, chemical processing, and quality control.',
    managerName: 'Eng. Patrick Bizimana',
    contactEmail: 'tours@cimerwa.rw',
    contactPhone: '+250 788 666 777',
    capacity: '40 visitors / session',
    operatingHours: '08:30 AM - 04:30 PM (Mon-Fri)',
    entranceFee: 'Free for Engineering Students',
    totalBookings: 45,
    facilities: ['Safety Gear Provision', 'Factory Observation Deck', 'Quality Testing Lab'],
  },
};

export default function TourSiteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);

  const site = mockSites[resolvedParams.id] || {
    id: resolvedParams.id,
    name: 'Study Tour Destination Site',
    location: 'Rwanda',
    district: 'Kigali City',
    category: 'educational',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600',
    description: 'Educational destination approved for Rwanda Study Tour Management System.',
    managerName: 'Site Manager',
    contactEmail: 'info@toursite.rw',
    contactPhone: '+250 788 000 000',
    capacity: '100 visitors / session',
    operatingHours: '08:00 AM - 05:00 PM',
    entranceFee: 'Varies',
    totalBookings: 50,
    facilities: ['Guided Tours', 'Parking Lot', 'Restrooms'],
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/dashboard/admin/sites"
            className="text-xs font-semibold text-[#1773CF] hover:underline inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Tour Sites
          </Link>

          <button className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#1773CF]" />
          </button>
        </div>

        {/* Title Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
            <Link href="/dashboard/admin" className="hover:underline">Admin</Link>
            <span>/</span>
            <Link href="/dashboard/admin/sites" className="hover:underline">Tour Sites</Link>
            <span>/</span>
            <span className="text-slate-900">{site.name}</span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h1 className="text-2xl font-bold text-slate-900">{site.name}</h1>
            <div className="flex items-center gap-1 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-full text-xs font-bold text-amber-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{site.rating}</span>
            </div>
          </div>
        </div>

        {/* Site Details Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Banner & Description */}
            <div className="bg-white rounded-lg border border-slate-200/80 overflow-hidden shadow-xs">
              <div className="h-52 w-full bg-slate-100 relative">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-slate-900/70 backdrop-blur-xs text-white text-xs font-semibold rounded-full capitalize">
                  {site.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-2">
                  About the Tour Site
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {site.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Location</span>
                    <span className="font-semibold text-slate-900 inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1773CF]" /> {site.location}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-0.5">District</span>
                    <span className="font-semibold text-slate-900">{site.district}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-0.5">Total Bookings</span>
                    <span className="font-bold text-[#1773CF] inline-flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" /> {site.totalBookings} Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Capacity & Operating Hours */}
            <div className="bg-white rounded-lg border border-slate-200/80 p-6 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                Tour Capacity & Operating Schedule
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Operating Hours</span>
                  <span className="font-semibold text-slate-900 inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {site.operatingHours}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Max Capacity</span>
                  <span className="font-semibold text-slate-900 inline-flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-400" /> {site.capacity}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Entrance Fee</span>
                  <span className="font-bold text-[#1773CF]">{site.entranceFee}</span>
                </div>
              </div>
            </div>

            {/* Facilities & Amenities */}
            <div className="bg-white rounded-lg border border-slate-200/80 p-6 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900 mb-3">
                Available Facilities & Amenities
              </h2>
              <div className="flex flex-wrap gap-2">
                {site.facilities.map((fac, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg inline-flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {fac}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Info */}
          <div className="space-y-6">
            {/* Site Manager Contact */}
            <div className="bg-white rounded-lg border border-slate-200/80 p-6 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                Site Manager Contact
              </h2>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Manager Name</span>
                  <span className="font-bold text-slate-900">{site.managerName}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Email Address</span>
                  <span className="font-medium text-slate-800 inline-flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" /> {site.contactEmail}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Phone Contact</span>
                  <span className="font-medium text-slate-800 inline-flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" /> {site.contactPhone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
