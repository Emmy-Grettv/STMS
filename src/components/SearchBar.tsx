"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search for tour sites, destinations, categories...",
  value: externalValue,
  onChange,
  onSearch,
  className = "",
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState("");
  const isControlled = externalValue !== undefined;
  const currentValue = isControlled ? externalValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!isControlled) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  const handleClear = () => {
    if (!isControlled) {
      setInternalValue("");
    }
    onChange?.("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(currentValue);
    }
  };

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-lg border border-gray-100 transition-all focus-within:ring-2 focus-within:ring-blue-500/20">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 shrink-0" />
        <input
          type="text"
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 text-sm text-gray-700 outline-none placeholder-gray-400 bg-transparent"
        />
        {currentValue && (
          <button
            onClick={handleClear}
            className="p-0.5 text-gray-400 hover:text-gray-600 transition-colors"
            type="button"
            aria-label="Clear search"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
