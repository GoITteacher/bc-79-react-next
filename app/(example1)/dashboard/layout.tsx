import Link from "next/link";
import css from "./Layout.module.css";

interface LayoutProps {
  users: React.ReactNode;
  sales: React.ReactNode;
  location: React.ReactNode;
  subs: React.ReactNode;
}

const Layout = ({ users, sales, location, subs }: LayoutProps) => {
  return (
    <div className={css["layout"]}>
      <aside className={css.sidebar}>
        <Link href="/dashboard">All</Link>
        <Link href="/dashboard/week">Week</Link>
        <Link href="/dashboard/month">Month</Link>
        <Link href="/dashboard/year">Year</Link>
      </aside>

      <div className={css.container}>
        <div className={css.page}>{users}</div>
        <div className={css.page}>{location}</div>
        <div className={css.page}>{sales}</div>
        <div className={css.page}>{subs}</div>
      </div>
    </div>
  );
};

export default Layout;
