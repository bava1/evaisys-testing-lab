"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiClient } from "@/api/api-client";

type AuthContextValue = {
  isAuthenticated: boolean;
  isReady: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

type AuthenticatedUser = {
  username: string;
  role: string;
};

type LoginResponse = {
  success: boolean;
  user: AuthenticatedUser;
  token: string;
};

type StoredAuthState = {
  token: string;
  user: AuthenticatedUser;
};

const AUTH_STORAGE_KEY = "evaisys-demo-auth-state";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const storedValue = window.localStorage.getItem(AUTH_STORAGE_KEY);

      if (!storedValue) {
        setIsAuthenticated(false);
        return;
      }

      const parsedValue = JSON.parse(storedValue) as Partial<StoredAuthState>;
      const hasValidAuthState =
        typeof parsedValue.token === "string" &&
        parsedValue.token.length > 0 &&
        typeof parsedValue.user?.username === "string" &&
        parsedValue.user.username.length > 0 &&
        typeof parsedValue.user.role === "string" &&
        parsedValue.user.role.length > 0;

      setIsAuthenticated(hasValidAuthState);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsReady(true);
    }
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    const response = await apiClient.post<LoginResponse>("/auth/login", {
      username,
      password,
    });

    window.localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({
        token: response.token,
        user: response.user,
      } satisfies StoredAuthState)
    );
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(true);
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
