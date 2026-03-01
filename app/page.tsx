import styles from "./page.module.css";

const highlights = [
  {
    title: "Capsule Collections",
    text: "Серія капсул, що зберігає щоденники, рукописні листи та старі фотки — кожна з них отримує власну іконографіку та високу увагу до текстур.",
  },
  {
    title: "Тактильні зустрічі",
    text: "Організовуємо невеликі читання та листування із запрошеними авторами, щоби відчути, як історії живуть у папері.",
  },
  {
    title: "Архівні мапи",
    text: "Мапи затирають межі часу: тут помітки, як виглядало місто 1960-х та м’які контури теперішніх вулиць.",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <p className={styles.heroEyebrow}>Time Capsule Studio</p>
        <h1 className={styles.heroTitle}>Теплі історії в пульсі паперу</h1>
        <p className={styles.heroText}>
          Ми збираємо мініатюрні капсули, які можна тримати в руках, перегортати та
          відчитувати заново — зі шрифтом, що нагадує ручний друк, та запахом
          кави й старого картону.
        </p>
        <div className={styles.heroMeta}>
          <span>Нові записи кожної п’ятниці</span>
          <span>М'яке світло + тепла гама</span>
        </div>
      </section>

      <section className={styles.gridSection}>
        {highlights.map((item) => (
          <article key={item.title} className={styles.card}>
            <p className={styles.cardLabel}>In focus</p>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.storySection}>
        <div>
          <h2>Місце зустрічі</h2>
          <p>
            Перший поверх студії — це простір із великими вікнами та м’яким теракотовим
            світлом, де шиті вручну книги лежать поряд із культурними артефактами.
          </p>
        </div>
        <div>
          <p className={styles.storyLabel}>Подія тижня</p>
          <p>
            Майстер-клас з каліграфії, де гості створюють свої міні-капсули на папері з
            текстурою грубої льняної нитки. Кожна капсула закривається шнуром з
            бронзовим замком.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Залишайся на зв’язку</h2>
        <p>
          Підпишись на нотатки, щоб отримати лист-послання, коли наступна капсула буде
          готова до розпаковки.
        </p>
        <button type="button">Підписатися</button>
      </section>
    </main>
  );
}
