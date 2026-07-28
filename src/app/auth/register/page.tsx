'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  User,
  GraduationCap,
  School,
  Building2,
  Briefcase,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegistrationStepper from '@/components/RegistrationStepper';

type MainRole = 'visitor' | 'tour-site';
type VisitorCategory = 'individual' | 'student' | 'school' | 'institution' | 'company';

interface RoleOption {
  id: MainRole;
  title: string;
  description: string;
}

interface CategoryOption {
  id: VisitorCategory;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ROLES: RoleOption[] = [
  {
    id: 'visitor',
    title: 'Visitor',
    description: 'Book and Visit tour sites across Rwanda',
  },
  {
    id: 'tour-site',
    title: 'Tour Site',
    description: 'Register your destination and manage booking',
  },
];

const VISITOR_CATEGORIES: CategoryOption[] = [
  {
    id: 'individual',
    title: 'Individual',
    description: 'Personal or family educational visits',
    icon: User,
  },
  {
    id: 'student',
    title: 'Student',
    description: 'School or university student booking tours',
    icon: GraduationCap,
  },
  {
    id: 'school',
    title: 'School/Group',
    description: 'Primary, Secondary, or TVET institution',
    icon: School,
  },
  {
    id: 'institution',
    title: 'Institution',
    description: 'Government agency, NGO, or university',
    icon: Building2,
  },
  {
    id: 'company',
    title: 'Company',
    description: 'Private enterprise or corporate group',
    icon: Briefcase,
  },
];

export default function RegisterPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedRole, setSelectedRole] = useState<MainRole>('visitor');
  const [selectedCategory, setSelectedCategory] = useState<VisitorCategory>('individual');
  const router = useRouter();

  const handleRoleSelect = (role: MainRole) => {
    setSelectedRole(role);
    if (role === 'tour-site') {
      router.push('/auth/register/tour-site');
    } else {
      setStep(2);
    }
  };

  const handleCategorySelect = (category: VisitorCategory) => {
    setSelectedCategory(category);
    router.push(`/auth/register/${category}`);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <header className="bg-[#1773CF] pb-4 px-4 shadow-sm">
        <Navbar />
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          {/* Centered Logo Icon */}
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

            {/* Stepper Dots */}
            <RegistrationStepper currentStep={step} totalSteps={3} />
          </div>

          {/* Card Container */}
          <div className="bg-white rounded-lg border border-slate-200/80 p-8 shadow-sm">
            {/* Top Back Link */}
            <div className="mb-4">
              {step === 2 ? (
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-[#1773CF] hover:underline inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              ) : (
                <Link
                  href="/"
                  className="text-xs font-semibold text-[#1773CF] hover:underline inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </Link>
              )}
            </div>

            {step === 1 ? (
              /* Step 1: Role Selection */
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-slate-900 mb-3">
                  I want to register as a...
                </h2>

                <div className="space-y-3">
                  {ROLES.map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => handleRoleSelect(role.id)}
                      className={`w-full p-4 rounded-lg border text-left flex items-center justify-between transition-all ${
                        selectedRole === role.id
                          ? 'bg-[#ebf3fa] border-[#1773CF] shadow-xs'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                          {role.title}
                        </h3>
                        <p className="text-xs text-slate-400">{role.description}</p>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 ${
                          selectedRole === role.id ? 'text-[#1773CF]' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Step 2: Visitor Category Selection */
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-slate-900 mb-3">
                  Select Visitor Type
                </h2>

                <div className="space-y-2.5">
                  {VISITOR_CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`w-full p-3.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-[#ebf3fa] border-[#1773CF]'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div>
                            <h3 className="text-xs font-bold text-slate-900">{cat.title}</h3>
                            <p className="text-[11px] text-slate-400">{cat.description}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Login Prompt */}
            <div className="text-center pt-6 mt-4">
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
