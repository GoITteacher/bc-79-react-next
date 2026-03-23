import Link from "next/link";
import css from "./Layout.module.css";
import ProductCategories from "@/components/ProductCategories/ProductCategories";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={css.container}>
      <aside className={css["sidebar"]}>
        <ul className={css["sidebar-list"]}>
          <li>
            <Link href="/products">Main Products</Link>
          </li>
          <li>
            <Link href="/products/popular">Popular Products</Link>
          </li>
          <li>
            <Link href="/products/discount">Discount Products</Link>
          </li>
        </ul>
        <ProductCategories />
      </aside>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
