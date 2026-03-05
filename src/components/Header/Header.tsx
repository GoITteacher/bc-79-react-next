import Button from "../customComponents/Button/Button";
import css from "./Header.module.css";

const Header = () => {
  // const userAge = 10;
  return (
    <header className={css.header}>
      <div className={css.brand}>Book Haven</div>
      <p className={css.tagline}>Місце, де кожна добірка натхненна</p>
      <Button isPrimary={true}>Sign In</Button>
      {/* {userAge > 18 && <p>18+</p>} */}
    </header>
  );
};

export default Header;
