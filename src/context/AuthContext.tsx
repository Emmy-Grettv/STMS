"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  district?: string;
  avatarUrl?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (userData: UserProfile, redirectUrl?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Restore user session from localStorage if available
    const storedUser = localStorage.getItem("stms_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user session", e);
      }
    }
  }, []);

  const login = (userData: UserProfile, redirectUrl?: string) => {
    setUser(userData);
    localStorage.setItem("stms_user", JSON.stringify(userData));
    if (redirectUrl) {
      router.push(redirectUrl);
    } else if (userData.role === "Admin" || userData.email.toLowerCase() === "admin@gmail.com") {
      router.push("/dashboard/admin");
    } else {
      router.push("/dashboard");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("stms_user");
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
