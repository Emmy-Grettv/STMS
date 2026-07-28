'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  LayoutDashboard,
  ClipboardList,
  MapPin,
  MessageSquare,
  Shield,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  const navItems = [
    { label: 'Overview', href: '/dashboard/admin', icon: LayoutDashboard },
    { label: 'All Bookings', href: '/dashboard/admin/bookings', icon: ClipboardList },
    { label: 'Tour Sites', href: '/dashboard/admin/sites', icon: MapPin },
    { label: 'Feedback', href: '/dashboard/admin/feedback', icon: MessageSquare },
  ];

  return (
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

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === '/dashboard/admin'
                ? pathname === '/dashboard/admin'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-slate-700/60 text-white font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
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
  );
}
