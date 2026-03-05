import Button from "../customComponents/Button/Button";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/960px-Instagram_logo_2016.svg.png"
          alt=""
          width={50}
        />
        <span>Instagram</span>
      </Button>
      <p>© 2026 Book Collective · спокій і натхнення в кожному рядку</p>
    </footer>
  );
};

export default Footer;
