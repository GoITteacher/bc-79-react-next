import styles from "./page.module.css";
import { getRandomCocktails } from "@/lib/cocktails-api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cocktails page",
  description: "Cocktails List",
};

const Page = async () => {
  const cocktails = await getRandomCocktails();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>Cocktail list</span>
        <h1 className={styles.title}>
          Discover new mixes and timeless classics
        </h1>
        <p className={styles.subtitle}>
          A curated batch of random cocktails for when you want something fresh,
          vibrant, and ready to explore.
        </p>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.gridHeader}>
          <h2 className={styles.sectionTitle}>Today&apos;s lineup</h2>
          <p className={styles.sectionCopy}>
            Tap a card to open the full recipe and photo for each cocktail.
          </p>
        </div>
        <ul className={styles.grid}>
          {cocktails.map((el) => {
            return (
              <li key={el._id} className={styles.card}>
                <Link className={styles.cardLink} href={`/cocktails/${el._id}`}>
                  <div className={styles.cardMedia}>
                    <Image
                      className={styles.cardImage}
                      src={el.drinkThumb}
                      alt={el.drink}
                      fill={true}
                      quality={30}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{el.drink}</h3>
                    <p className={styles.cardDescription}>{el.description}</p>
                    <span className={styles.cardCta}>View details</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Page;
