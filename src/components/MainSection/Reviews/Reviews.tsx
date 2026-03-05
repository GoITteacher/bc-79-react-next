import styles from "../MainSection.module.css";

const Reviews = () => {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>Фокус на читанні</h3>
      <p className={styles.cardText}>
        Невеликі нотатки про те, як зберігати спокій та отримувати максимум від
        кожної сторінки.
      </p>
    </article>
  );
};

export default Reviews;
