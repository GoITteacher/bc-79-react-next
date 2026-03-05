import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <p className={css.label}>Тут і зараз</p>
      <p className={css.description}>
        Декілька простих нагадувань, щоб зробити читання приємнішим.
      </p>
    </aside>
  );
};

export default Sidebar;
