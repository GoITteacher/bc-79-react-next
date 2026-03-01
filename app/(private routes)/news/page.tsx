"use client";

import Link from "next/link";
import styles from "./news.module.css";
import { usePrivatePage } from "@/components/PrivatePage/PublicPage";

const newsStories = [
  {
    title: "Cookie auth tutorial hits the blog",
    summary:
      "Explained how the Express server issues JWTs, refresh tokens, and the protected news endpoint.",
  },
  {
    title: "Client testimonial: Sped up onboarding",
    summary:
      "Agencies praise the clarity of refresh token handling before committing to a pilot.",
  },
  {
    title: "Video story: Tasks flow in action",
    summary:
      "A short walkthrough shows how a task moves from todo -> done while the UI polls the API.",
  },
  {
    title: "Notes archive now searchable",
    summary:
      "Introduced tagging and archive filters so notes can be filtered the same way endpoints will.",
  },
];

export default function NewsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.listWrapper}>
        <h1 className={styles.title}>News</h1>
        <Link href="/news/create">Create News</Link>
        <ul className={styles.newsList}>
          {newsStories.map((story) => (
            <li className={styles.newsCard} key={story.title}>
              <h2>{story.title}</h2>
              <p>{story.summary}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
