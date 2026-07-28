"use client";

import React, { SelectHTMLAttributes } from "react";
import { AlertCircle } from "lucide-react";

export interface OptionItem {
  label: string;
  value: string;
}

export interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: (string | OptionItem)[];
  containerClassName?: string;
}

export default function FormSelect({
  label,
  error,
  options,
  containerClassName = "",
  className = "",
  id,
  required,
  ...props
}: FormSelectProps) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-xs font-semibold text-slate-700 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <select
        id={selectId}
        required={required}
        className={`w-full px-3.5 py-2.5 text-xs rounded-lg outline-none transition-all ${
          error
            ? "bg-red-50/50 border border-red-400 text-red-900 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            : "bg-slate-50/50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[#1773CF] focus:ring-1 focus:ring-[#1773CF]"
        } ${className}`}
        {...props}
      >
        {options.map((opt) => {
          const val = typeof opt === "string" ? opt : opt.value;
          const lbl = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={val} value={val}>
              {lbl}
            </option>
          );
        })}
      </select>
      {error && (
        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
          <span className="text-[11px] font-medium leading-tight">{error}</span>
        </div>
      )}
    </div>
  );
}
