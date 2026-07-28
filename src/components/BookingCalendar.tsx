"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

interface BookingCalendarProps {
  className?: string;
}

export default function BookingCalendar({ className = "" }: BookingCalendarProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // March 2026 starts on Sunday (day 1 is index 6)
  const unavailableDays = [1, 15];

  return (
    <div className={`bg-white rounded-lg border border-slate-200 p-6 shadow-sm ${className}`}>
      {/* Calendar Header */}
      <div className="flex items-center gap-2 mb-5">
        <CalendarDaysIcon className="w-5 h-5 text-[#1773CF]" />
        <h3 className="text-base font-bold text-slate-900">
          Availability — March 2026
        </h3>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1.5 text-center mb-3">
        {weekDays.map((d) => (
          <span key={d} className="text-xs font-semibold text-slate-400">
            {d}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1.5 text-center">
        {/* Leading empty slots for March 1st starting on Sunday (6 slots) */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={`empty-${i}`} className="py-2 text-xs text-transparent select-none">
            -
          </div>
        ))}

        {daysInMonth.map((day) => {
          const isUnavailable = unavailableDays.includes(day);
          const isSelected = selectedDay === day;

          if (isUnavailable) {
            return (
              <div
                key={day}
                className="py-2 text-xs font-medium text-slate-300 select-none flex items-center justify-center"
              >
                {day}
              </div>
            );
          }

          return (
            <button
              key={day}
              type="button"
              onClick={() => setSelectedDay(day)}
              className={`py-2 text-xs font-medium rounded-lg transition-all ${
                isSelected
                  ? "bg-[#1773CF] text-white shadow-sm font-bold scale-105"
                  : "bg-[#ecfdf5] text-[#047857] hover:bg-[#d1fae5] hover:text-[#065f46]"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Availability Legend */}
      <div className="flex items-center gap-4 mt-6 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]"></span>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]"></span>
          <span>Unavailable</span>
        </div>
      </div>

      {/* Booking Auth CTAs */}
      <div className=" pt-5  space-y-3">
        <p className="text-xs text-slate-600 font-medium">
          To book, you need an account.
        </p>

        <Link
          href="/auth/register"
          className="w-full inline-flex items-center justify-center bg-[#1773CF] hover:bg-[#1565C0] text-white text-sm font-semibold py-3 rounded-lg shadow-sm transition-colors"
        >
          Sign Up to Book
        </Link>

        <Link
          href="/auth/login"
          className="w-full border border-slate-600 inline-flex items-center justify-center bg-[#e2e8f0] hover:bg-[#cbd5e1] text-slate-800 text-sm font-semibold py-3 rounded-lg transition-colors"
        >
          Already have an account? Log In
        </Link>
      </div>
    </div>
  );
}
