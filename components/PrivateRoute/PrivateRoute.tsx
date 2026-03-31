"use client";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute = () => {
  const router = useRouter();
  const isAuth = useUserStore((s) => s.isAuth);
  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  return null;
};

export default PrivateRoute;
