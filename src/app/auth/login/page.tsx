'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormInput from '@/components/FormInput';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailLower = formData.email.trim().toLowerCase();

    if (emailLower === 'admin@gmail.com' && formData.password === 'admin') {
      login(
        {
          name: 'System Admin',
          email: 'admin@gmail.com',
          role: 'Admin',
        },
        '/dashboard/admin'
      );
    } else {
      login(
        {
          name: formData.email ? formData.email.split('@')[0] : 'Visitor User',
          email: formData.email || 'user@stms.rw',
          role: 'Visitor',
        },
        '/dashboard'
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <header className="bg-[#1773CF] pb-4 px-4 shadow-sm">
        <Navbar />
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          {/* Centered Logo Icon & Welcome Text */}
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#1773CF] flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">
              Welcome Back
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              Log in to your STMS Account
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg border border-slate-200/80 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label="Email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                Log In
              </button>
            </form>

            {/* Bottom Register Prompt */}
            <div className="text-center pt-6 mt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 font-medium">
                Don't have an account?{' '}
                <Link href="/auth/register" className="text-[#1773CF] font-bold hover:underline">
                  Sign up
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
