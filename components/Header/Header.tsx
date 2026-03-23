import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <Link href="/">Home</Link>
      <Link href="/cars/filters/all">Cars</Link>
      <Link href="/settings">Settings</Link>
    </header>
  );
};

export default Header;
