"use client";

import Link from "next/link";

export interface Category {
  id?: string;
  name: string;
  count: number;
  href?: string;
}

interface CategoryCardProps {
  category: Category;
  isSelected?: boolean;
  onSelect?: () => void;
  className?: string;
}

export default function CategoryCard({
  category,
  isSelected = false,
  onSelect,
  className = "",
}: CategoryCardProps) {
  const content = (
    <div
      onClick={onSelect}
      className={`border rounded-lg px-4 py-3 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
        isSelected
          ? "bg-blue-50 border-[#1565C0] shadow-sm ring-1 ring-[#1565C0]"
          : "bg-white border-gray-200 hover:border-[#1565C0] hover:shadow-sm"
      } ${className}`}
    >
      <p
        className={`text-sm font-medium transition-colors ${
          isSelected ? "text-[#1565C0] font-semibold" : "text-gray-800 hover:text-[#1565C0]"
        }`}
      >
        {category.name}
      </p>
      <p className={`text-xs mt-1 ${isSelected ? "text-blue-600 font-medium" : "text-gray-400"}`}>
        {category.count} sites
      </p>
    </div>
  );

  if (category.href && !onSelect) {
    return <Link href={category.href}>{content}</Link>;
  }

  return content;
}
