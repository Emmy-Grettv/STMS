'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, Shield, LogIn } from 'lucide-react'
import Link from 'next/link'
import { MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<'visitor' | 'tour-site' | null>('visitor')
  const router = useRouter()

  const handleRoleSelect = (role: 'visitor' | 'tour-site') => {
    setSelectedRole(role)
  }

  const handleContinue = () => {
    if (selectedRole) {
      router.push(`/register/${selectedRole}`)
    }
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-[#1e88e5] rounded-xl flex items-center justify-center shadow-inner">
                <MapPinIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb1">
              Create your account
            </h1>
            <p className="text-sm text-[#707d8f]">
              Join the Study Tour Management System
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-2 w-8 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Card Content */}
          <Card className="border-0 shadow-sm bg-white p-6">
            {/* Back Button */}
            <button className="text-[#1773cf] text-sm font-medium flex items-center gap-1 hover:text-blue-700 transition-colors">
              <span>← Back</span>
            </button>

            {/* Role Selection */}
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-4">
                I want to register as a...
              </p>

              <div className="space-y-3">
                {/* Visitor Option */}
                <button
                  onClick={() => handleRoleSelect('visitor')}
                  className={`w-full p-4 rounded-lg border-1 transition-all text-left ${
                    selectedRole === 'visitor'
                      ? 'border-[#1773cf] bg-[#e8f1fb]'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Visitor
                      </h3>
                      <p className="text-xs text-[#7f8b9d]">
                        Visit and chat tour sites across Rwanda
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                  </div>
                </button>

                {/* Tour Site Option */}
                <button
                  onClick={() => handleRoleSelect('tour-site')}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedRole === 'tour-site'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Tour Site
                      </h3>
                      <p className="text-xs text-[#7f8b9d]">
                        Register your destination and manage booking
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                  </div>
                </button>
              </div>
            </div>

            {/* Continue Button */}
            <Button
              onClick={handleContinue}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
            >
              Continue
            </Button>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-slate-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-blue-600 font-medium hover:text-blue-700">
                  Log in
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
