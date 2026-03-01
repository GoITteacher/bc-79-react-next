"use client";

import Link from "next/link";
import styles from "./page.module.css";

const highlightCards = [
  {
    title: "Task board",
    description: "Track priorities, due dates, and blockers for every project sprint.",
    link: "/tasks",
    badge: "In progress",
  },
  {
    title: "Notes vault",
    description: "Capture briefs, approvals, and research snippets in secure, searchable notes.",
    link: "/notes",
    badge: "Fresh",
  },
  {
    title: "News feed",
    description: "Share program updates, testimonials, and product stories with the team.",
    link: "/news",
    badge: "Live",
  },
];

const stats = [
  { label: "Active users", value: "1,240+" },
  { label: "Tasks completed", value: "684" },
  { label: "Notes archived", value: "242" },
];

const previews = [
  {
    title: "Familiar sprint cadence",
    summary:
      "This week’s focus stays on the platform migration. Three critical tasks remain in QA with a 24h target.",
    tag: "Tasks",
  },
  {
    title: "Client onboarding journal",
    summary:
      "Polished the welcome note for the newest agency partner and captured their kickoff priorities.",
    tag: "Notes",
  },
  {
    title: "Product news spotlight",
    summary:
      "Recent testimonials celebrated the new insights dashboard—share the same energy with your team.",
    tag: "News",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.tag}>Client demo</p>
          <div className={styles.heroCopy}>
            <h1>Everything you need to stay confident with news, tasks, and notes.</h1>
            <p>
              This placeholder experience mirrors the protected data from the demo server. It
              previews how updates, sweeps, and private notes will look once the APIs arrive.
            </p>
          </div>
          <div className={styles.ctaGroup}>
            <Link className={styles.primaryButton} href="/tasks">
              View Tasks
            </Link>
            <Link className={styles.secondaryButton} href="/news">
              Read News
            </Link>
          </div>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className={styles.gridHeader}>
            <h2>Quick links</h2>
            <p>Every area mirrors the server routes so we can swap in real data later.</p>
          </div>
          <div className={styles.grid}>
            {highlightCards.map((card) => (
              <article className={styles.card} key={card.title}>
                <div>
                  <p className={styles.badge}>{card.badge}</p>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
                <Link className={styles.cardLink} href={card.link}>
                  Open preview →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <h2>Live previews</h2>
            <p>Fake data that matches the structures defined in the server docs.</p>
          </div>
          <div className={styles.previewList}>
            {previews.map((item) => (
              <article className={styles.previewItem} key={item.title}>
                <div className={styles.previewTag}>{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
