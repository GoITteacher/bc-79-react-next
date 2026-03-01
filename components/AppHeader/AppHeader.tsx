"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Tasks</Link>
        </li>
        <li>
          <Link href="/wishlist">Bucket</Link>
        </li>
        <li>
          <Link href="/bucket">Bucket</Link>
        </li>
      </ul>
    </header>
  );
}
