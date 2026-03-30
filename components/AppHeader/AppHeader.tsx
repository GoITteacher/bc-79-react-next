"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useAuthStore } from "@/stores/authStore";
import { logout } from "@/lib/auth";

export default function AppHeader() {
  const user = useAuthStore((s) => s.user);
  const isAuth = useAuthStore((s) => s.isAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  const handleLogout = async () => {
    await logout();
    clearAuth();
  };

  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks</Link>
        </li>
        <li>
          <Link href="/bucket">Bucket</Link>
        </li>
      </ul>

      <div>
        {isAuth && (
          <div>
            <p>Hello {user?.name}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}

        {!isAuth && <Link href="/auth/login">Sign In</Link>}
      </div>
    </header>
  );
}
