"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  isReady: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const DEMO_USERNAME = "admin";
const DEMO_PASSWORD = "123456";
const DEMO_AUTH_STORAGE_KEY = "evaisys-demo-authenticated";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(DEMO_AUTH_STORAGE_KEY);
    setIsAuthenticated(storedValue === "true");
    setIsReady(true);
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
      setIsAuthenticated(true);
      window.localStorage.setItem(DEMO_AUTH_STORAGE_KEY, "true");
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    window.localStorage.removeItem(DEMO_AUTH_STORAGE_KEY);
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      isReady,
      login,
      logout,
    }),
    [isAuthenticated, isReady]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
