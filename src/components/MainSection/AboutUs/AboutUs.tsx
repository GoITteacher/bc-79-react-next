import styles from "../MainSection.module.css";

const AboutUs = () => {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>Про нас</h3>
      <p className={styles.cardText}>
        Ми створюємо простір для тих, хто цінує добірну літературу та легкі
        ритуали читання.
      </p>
    </article>
  );
};

export default AboutUs;
