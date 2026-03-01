"use client";

import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const usePrivatePage = () => {
  const router = useRouter();
  const isAuth = useUserStore((s) => s.isAuth);

  useEffect(() => {
    if (isAuth === false) {
      router.push("/");
    }
  }, [isAuth]);
};
