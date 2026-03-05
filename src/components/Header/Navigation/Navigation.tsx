import css from "./Navigation.module.css";

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  return (
    <div className={css["navigation"]}>
      <a
        href=""
        className={`active-link ${css.link} ${css.link1} ${css.link2}`}
      ></a>
    </div>
  );
};

export default Navigation;
