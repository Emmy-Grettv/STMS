"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export default function RoleCard({
  title,
  description,
  isSelected,
  onSelect,
  icon: Icon,
  className = "",
}: RoleCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full p-4 rounded-lg border transition-all text-left flex items-start justify-between ${
        isSelected
          ? "border-[#1773CF] bg-[#e8f1fb] ring-1 ring-[#1773CF]"
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
      } ${className}`}
    >
      <div className="flex items-start gap-3 flex-1">
        {Icon && (
          <div
            className={`p-2 rounded-md shrink-0 ${
              isSelected
                ? "bg-[#1773CF] text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 mb-0.5">{title}</h3>
          <p className="text-xs text-[#7f8b9d] leading-relaxed">{description}</p>
        </div>
      </div>
      <ChevronRight
        className={`w-5 h-5 flex-shrink-0 ml-2 self-center transition-transform ${
          isSelected ? "text-[#1773CF] translate-x-0.5" : "text-slate-400"
        }`}
      />
    </button>
  );
}
