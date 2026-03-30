"use client";

import { getMe, refresh } from "@/lib/auth";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    async function fetchData() {
      await refresh();
      const data = await getMe();
      if (data.user) {
        setUser(data.user);
      }
    }

    fetchData();
  }, []);

  return children;
};

export default AuthProvider;
