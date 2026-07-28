"use client";

import React, { useState, InputHTMLAttributes } from "react";
import { LucideIcon, AlertCircle, Eye, EyeOff } from "lucide-react";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  containerClassName?: string;
}

export default function FormInput({
  label,
  error,
  icon: Icon,
  type = "text",
  containerClassName = "",
  className = "",
  id,
  required,
  ...props
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const actualType = isPassword ? (showPassword ? "text" : "password") : type;
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-slate-700 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={inputId}
          type={actualType}
          required={required}
          className={`w-full px-3.5 py-2.5 text-xs rounded-lg outline-none transition-all ${
            error
              ? "bg-red-50/50 border border-red-400 text-red-900 placeholder:text-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "bg-slate-50/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#1773CF] focus:ring-1 focus:ring-[#1773CF]"
          } ${Icon ? "pl-10" : ""} ${isPassword ? "pr-10" : ""} ${className}`}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
          <span className="text-[11px] font-medium leading-tight">{error}</span>
        </div>
      )}
    </div>
  );
}
