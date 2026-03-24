import css from "./Layout.module.css";

interface LayoutProps {
  products: React.ReactNode;
  users: React.ReactNode;
  news: React.ReactNode;
  page: React.ReactNode;
}

const Layout = ({ page, users, news, products }: LayoutProps) => {
  return (
    <div className={css["layout"]}>
      <div className={css["page"]}>{page}</div>
      <div className={css["page"]}>{news}</div>
      <div className={css["page"]}>{products}</div>
      <div className={css["page"]}>{users}</div>
    </div>
  );
};

export default Layout;
