"use client";

import { getMe, refreshSession } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const setUser = useUserStore((s) => s.setUser);
  const clearUserInfo = useUserStore((s) => s.clearUserInfo);

  useEffect(() => {
    const fetchUser = async () => {
      console.log("START REFRESH");
      const isAuthorized = await refreshSession();
      if (isAuthorized) {
        const user = await getMe();
        if (user) {
          setUser(user);
        }
      } else {
        clearUserInfo();
      }
    };

    fetchUser();
  }, []);

  return children;
};

export default AuthProvider;
