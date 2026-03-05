import styles from "../MainSection.module.css";

const Hero = () => {
  return (
    <article className={styles.hero}>
      <p className={styles.heroTitle}>Натхнення дня</p>
      <p className={styles.heroText}>
        Ідеї для швидкої перерви: оберіть книгу, яка погодиться з вашим настроєм.
      </p>
    </article>
  );
};

export default Hero;
