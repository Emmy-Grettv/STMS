'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegistrationStepper from '@/components/RegistrationStepper';
import FormInput from '@/components/FormInput';
import { useAuth } from '@/context/AuthContext';

export default function IndividualRegisterPage() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationalId: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleNationalIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '').slice(0, 16);
    setFormData((prev) => ({ ...prev, nationalId: rawVal }));

    if (rawVal && rawVal.length !== 16) {
      setErrors((prev) => ({ ...prev, nationalId: 'National ID must be exactly 16 numbers' }));
    } else {
      setErrors((prev) => ({ ...prev, nationalId: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (formData.nationalId && formData.nationalId.length !== 16) {
      newErrors.nationalId = 'National ID must be exactly 16 numbers';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    login({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      role: 'Individual Visitor',
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <header className="bg-[#1773CF] pb-4 px-4 shadow-sm">
        <Navbar />
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          {/* Centered Logo Icon & Stepper */}
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

            {/* Stepper Component */}
            <RegistrationStepper currentStep={3} totalSteps={3} />
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg border border-slate-200/80 p-8 shadow-sm">
            {/* Top Back Link */}
            <div className="mb-4">
              <Link
                href="/auth/register"
                className="text-xs font-semibold text-[#1773CF] hover:underline inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </Link>
            </div>

            <h2 className="text-base font-bold text-slate-900 mb-5">
              Individual Registration
            </h2>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="First Name"
                  type="text"
                  required
                  placeholder="Jean"
                  value={formData.firstName}
                  error={errors.firstName}
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                    if (errors.firstName) setErrors({ ...errors, firstName: '' });
                  }}
                />
                <FormInput
                  label="Last Name"
                  type="text"
                  required
                  placeholder="Mugabo"
                  value={formData.lastName}
                  error={errors.lastName}
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                    if (errors.lastName) setErrors({ ...errors, lastName: '' });
                  }}
                />
              </div>

              {/* Email */}
              <FormInput
                label="Email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                error={errors.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
              />

              {/* Phone Number */}
              <FormInput
                label="Phone Number"
                type="tel"
                required
                placeholder="+250 7XX XXX XXX"
                value={formData.phone}
                error={errors.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
              />

              {/* National ID (optional) */}
              <FormInput
                label="National ID (optional)"
                type="text"
                maxLength={16}
                placeholder="1199880012345678"
                value={formData.nationalId}
                error={errors.nationalId}
                onChange={handleNationalIdChange}
              />

              {/* Password */}
              <FormInput
                label="Password"
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                error={errors.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1773CF] hover:bg-[#1565C0] text-white text-sm font-semibold py-3 rounded-lg shadow-sm transition-colors mt-2"
              >
                Create Account
              </button>
            </form>

            {/* Bottom Login Prompt */}
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
