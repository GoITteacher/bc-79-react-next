import Link from "next/link";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is Home Page",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>Next.js Playground</span>
        <h1 className={styles.title}>
          Discover beautiful products at a glance
        </h1>

        <p className={styles.subtitle}>
          Browse curated categories, inspect detailed descriptions, and learn
          how TanStack Query keeps everything snappy.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} href="/products">
            Explore products
          </Link>
          <a
            className={styles.secondaryAction}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            Next.js docs
          </a>
        </div>
      </section>

      <section className={styles.quickStart}>
        <h2 className={styles.sectionTitle}>Quick start guide</h2>
        <ol className={styles.stepList}>
          <li className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div>
              <h3>Edit the home page</h3>
              <p>
                Get started by editing <code>app/page.tsx</code> to make it your
                own experience.
              </p>
            </div>
          </li>
          <li className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <div>
              <h3>See changes instantly</h3>
              <p>
                Save your updates and the dev server will refresh the UI to show
                the latest tweaks.
              </p>
            </div>
          </li>
          <li className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <div>
              <h3>Preview product flows</h3>
              <p>
                Navigate between categories and product details to experience
                the styled layout.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}
