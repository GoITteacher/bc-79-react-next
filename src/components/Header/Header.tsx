import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.brand}>Book Haven</div>
      <p className={css.tagline}>Місце, де кожна добірка натхненна</p>
    </header>
  );
};

export default Header;
