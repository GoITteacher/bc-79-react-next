"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useUserStore } from "@/store/userStore";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Tasks", href: "/tasks" },
  { label: "Notes", href: "/notes" },
  { label: "News", href: "/news" },
];

const secondaryLinks = [
  { label: "Login", href: "/sign-in" },
  { label: "Register", href: "/sign-up", primary: true },
];

export default function AppHeader() {
  const router = useRouter();
  const isAuth = useUserStore((s) => s.isAuth);
  const clearUserInfo = useUserStore((s) => s.clearUserInfo);

  const handleLogout = async () => {
    await logout();
    clearUserInfo();
    router.push("/");
  };

  return (
    <header className={css.header}>
      <Link href="/" className={css.brand}>
        <span className={css.brandMark} />
        <div>
          <p className={css.brandName}>Pulse workspace</p>
          <span className={css.brandTag}>Demo portal</span>
        </div>
      </Link>

      {isAuth && (
        <nav className={css.nav}>
          {navLinks.map((link) => (
            <Link className={css.navLink} key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <div className={css.auth}>
        {!isAuth &&
          secondaryLinks.map((link) => (
            <Link
              className={`${css.authLink} ${link.primary ? css.primary : ""}`}
              key={link.label}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}

        {isAuth && <button onClick={handleLogout}>Logout</button>}
      </div>
    </header>
  );
}
