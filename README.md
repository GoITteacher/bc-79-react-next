# Заняття 14 - Meta

- SEO
- Мета-теги
  - metadata
  - generateMetadata
- OG і Twitter мета-теги
- Шрифти
- Зображення з next/image
- Lighthouse
  - FCP (First Contentful Paint) - перше відображення якогось контенту
  - LCP (Largest Contentful Paint)
  - TTI (Time to Interactive)
  - TBT (Total Blocking Time)
  - CLS (Cumulative Layout Shift)

<!-- https://cdn.pixabay.com/photo/2025/08/21/09/51/rouen-cathedral-9787080_1280.jpg -->

---

```html
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
                    <img
                      className={styles.cardImage}
                      src={el.drinkThumb}
                      alt={el.drink}
                      fill
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
```

---

```js
<div className={styles.page}>
  <Link className={styles.backLink} href="/cocktails">
    Back to cocktails
  </Link>

  <section className={styles.hero}>
    <div className={styles.media}>
      <img
        className={styles.image}
        src={details.drinkThumb}
        width={560}
        height={560}
        priority
        alt={details.drink}
        sizes="(max-width: 900px) 100vw, 50vw"
      />
    </div>
    <div className={styles.content}>
      <span className={styles.badge}>Signature serve</span>
      <h1 className={styles.title}>{details.drink}</h1>
      <p className={styles.description}>{details.description}</p>
      <ul className={styles.meta}>
        <li>
          <span className={styles.metaLabel}>Category</span>
          <span className={styles.metaValue}>{details.category}</span>
        </li>
        <li>
          <span className={styles.metaLabel}>Alcohol</span>
          <span className={styles.metaValue}>{details.alcoholic}</span>
        </li>
        <li>
          <span className={styles.metaLabel}>Glass</span>
          <span className={styles.metaValue}>{details.glass}</span>
        </li>
      </ul>
      <div className={styles.actions}>
        <Link className={styles.primaryAction} href="/cocktails">
          Explore more cocktails
        </Link>
        <Link className={styles.secondaryAction} href="/">
          Back to home
        </Link>
      </div>
    </div>
  </section>

  <section className={styles.detailsGrid}>
    <div className={styles.infoCard}>
      <h2>Short description</h2>
      <p>{details.shortDescription}</p>
    </div>
    <div className={styles.infoCard}>
      <h2>Instructions</h2>
      <p>{details.instructions}</p>
    </div>
  </section>

  <section className={styles.ingredients}>
    <h2>Ingredients</h2>
    <ul className={styles.ingredientList}>
      {details.ingredients.map((ingredient) => (
        <li key={ingredient.ingredientId}>
          <span className={styles.ingredientTitle}>{ingredient.title}</span>
          <span className={styles.ingredientMeasure}>{ingredient.measure}</span>
        </li>
      ))}
    </ul>
  </section>

  <section className={styles.more}>
    <div className={styles.moreCard}>
      <h2>Keep the menu flowing</h2>
      <p>
        Refresh the list for new inspiration, or save this cocktail to come back
        to later.
      </p>
      <Link className={styles.secondaryAction} href="/cocktails">
        Browse full list
      </Link>
    </div>
  </section>
</div>
```
