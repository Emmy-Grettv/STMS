"use client";

import React from "react";

export interface StatItem {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  value: string | number;
  label: string;
  iconColor?: string;
}

interface StatCardProps {
  stat: StatItem;
  className?: string;
}

export default function StatCard({ stat, className = "" }: StatCardProps) {
  const { icon: Icon, value, label, iconColor = "#1565C0" } = stat;

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Icon className="w-7 h-7 mb-1 transition-transform hover:scale-110" style={{ color: iconColor }} />
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
}
