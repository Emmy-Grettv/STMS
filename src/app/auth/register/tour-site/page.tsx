'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegistrationStepper from '@/components/RegistrationStepper';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';
import { useAuth } from '@/context/AuthContext';

export default function TourSiteRegisterPage() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    siteName: '',
    officialEmail: '',
    phone: '',
    district: '',
    category: 'Agriculture & Farms',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({
      name: formData.siteName || 'Tour Site Manager',
      email: formData.officialEmail,
      role: 'Tour Site Manager',
      district: formData.district,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <header className="bg-[#1773CF] pb-4 px-4 shadow-sm">
        <Navbar />
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#1773CF] flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">
              Create your account
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              Join the Study Tour Management System
            </p>
            <RegistrationStepper currentStep={3} totalSteps={3} />
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg border border-slate-200/80 p-8 shadow-sm">
            <div className="mb-4">
              <Link
                href="/auth/register"
                className="text-xs font-semibold text-[#1773CF] hover:underline inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </Link>
            </div>

            <h2 className="text-base font-bold text-slate-900 mb-5">
              Tour Site Registration
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label="Site / Organization Name"
                type="text"
                required
                placeholder="e.g. Groupe Scolaire de Kigali"
                value={formData.siteName}
                onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
              />

              <FormInput
                label="Official Email"
                type="email"
                required
                placeholder="admin@toursite.rw"
                value={formData.officialEmail}
                onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
              />

              <FormInput
                label="Phone Number"
                type="tel"
                required
                placeholder="+250 7XX XXX XXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <FormInput
                label="District"
                type="text"
                required
                placeholder="e.g. Gasabo"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              />

              <FormSelect
                label="Category"
                options={[
                  "Agriculture & Farms",
                  "Cultural Heritage",
                  "Nature & Wildlife",
                  "Education & Schools",
                  "Innovation & Tech Hubs",
                  "Health & Medical",
                  "Industry & Manufacturing",
                  "History & Memorials",
                ]}
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />

              <FormInput
                label="Password"
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-[#1773CF] hover:bg-[#1565C0] text-white text-sm font-semibold py-3 rounded-lg shadow-sm transition-colors mt-2"
              >
                Create Account
              </button>
            </form>

            <div className="text-center pt-6 mt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 font-medium">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-[#1773CF] font-bold hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
