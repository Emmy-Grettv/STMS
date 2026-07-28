'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, FileText, User, Mail, Phone, ArrowLeft, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

const siteNames: Record<string, string> = {
  '6': 'Inyambo Cultural Village',
  '1': 'Kigali Genocide Memorial',
  '2': 'Volcanoes National Park',
  '3': "King's Palace Museum",
  '4': 'kLab Innovation Hub',
  '5': 'University of Rwanda - Huye Campus',
  '7': 'King Faisal Hospital',
  '8': 'Inyange Industries Factory',
};

export default function BookingFormPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const siteId = resolvedParams.id;
  const siteName = siteNames[siteId] || 'Inyambo Cultural Village';

  const [formData, setFormData] = useState({
    siteName: siteName,
    visitorType: 'Individual',
    tourDate: '2026-03-19',
    visitorCount: 1,
    contactName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <header className="bg-[#1773CF] pb-4 px-4 shadow-sm">
        <Navbar />
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Logo size="lg" variant="dark" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">
              Request a Study Tour
            </h1>
            <p className="text-xs text-slate-500">
              Submit your booking request for {siteName}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <Link
              href={`/sites/${siteId}`}
              className="text-xs font-semibold text-[#1773CF] hover:underline flex items-center gap-1 mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to site details
            </Link>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">
                  Booking Request Received!
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                  Your request to tour <strong>{siteName}</strong> on <strong>{formData.tourDate}</strong> has been submitted. The site manager will review and confirm your booking shortly.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-[#1773CF] text-white text-xs font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:bg-[#1565C0] transition-colors mt-2"
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Selected Destination
                  </label>
                  <input
                    type="text"
                    disabled
                    value={formData.siteName}
                    className="w-full px-3 py-2.5 text-xs bg-slate-100 border border-slate-200 rounded-xl text-slate-700 font-semibold cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Visitor Category
                  </label>
                  <select
                    value={formData.visitorType}
                    onChange={(e) => setFormData({ ...formData, visitorType: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:border-[#1773CF] focus:ring-1 focus:ring-[#1773CF] bg-white"
                  >
                    <option value="Individual">Individual Visitor</option>
                    <option value="Student">Student Visitor</option>
                    <option value="School Group">School Group</option>
                    <option value="Institution">Institution / Organization</option>
                    <option value="Company">Company / Corporate Group</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date of Tour
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.tourDate}
                      onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:border-[#1773CF] focus:ring-1 focus:ring-[#1773CF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Number of Visitors
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="number"
                      min={1}
                      max={200}
                      required
                      value={formData.visitorCount}
                      onChange={(e) => setFormData({ ...formData, visitorCount: parseInt(e.target.value) || 1 })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:border-[#1773CF] focus:ring-1 focus:ring-[#1773CF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Person Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:border-[#1773CF] focus:ring-1 focus:ring-[#1773CF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:border-[#1773CF] focus:ring-1 focus:ring-[#1773CF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+250 788 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:border-[#1773CF] focus:ring-1 focus:ring-[#1773CF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Requirements / Notes
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <textarea
                      rows={3}
                      placeholder="Any specific educational topics or access requests..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl outline-none focus:border-[#1773CF] focus:ring-1 focus:ring-[#1773CF]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1773CF] hover:bg-[#1565C0] text-white text-sm font-semibold py-3 rounded-xl shadow-sm transition-colors mt-4"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
