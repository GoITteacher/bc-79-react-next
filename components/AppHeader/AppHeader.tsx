"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useFruitsStore } from "@/stores/fruitsStore";
import LangSelect from "../LangSelect/LangSelect";
import ThemeSelect from "../ThemeSelect/ThemeSelect";
import { useConfigStore } from "@/stores/configStore";
import clsx from "clsx";

export default function AppHeader() {
  const { apples, lemons } = useFruitsStore();
  const theme = useConfigStore((s) => s.theme);
  const isDark = theme === "dark";

  return (
    <header className={clsx(css.header, isDark && css["dark-mode"])}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/lessons">Lessons</Link>
        </li>
        <li>
          <Link href="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link href="/bucket">Bucket</Link>
        </li>
      </ul>

      <LangSelect />
      <ThemeSelect />

      <p>Total fruits: {apples + lemons}</p>
    </header>
  );
}
