import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <nav>
        <ul className={css["navigation"]}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cocktails">Cocktails</Link>
          </li>
          <li>
            <Link href="/products">Product</Link>
          </li>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
        </ul>
      </nav>

      <div className={css["auth"]}>
        <Link href="/auth/login">Sign In </Link>
        <Link href="/auth/register">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
