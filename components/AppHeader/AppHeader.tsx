import Link from "next/link";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={css.header}>
      <div className={css.brand}>
        <div className={css.brandBadge}>JS</div>
        <div>
          <h1 className={css.brandTitle}>Next JS</h1>
        </div>
      </div>
      <nav className={css.navWrapper}>
        <ul className={css.nav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pokemons">Pokemons</Link>
          </li>
          <li>
            <Link href="/students">Students</Link>
          </li>
          <li>
            <Link href="/songs">Songs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
