"use client";

import Link from "next/link";
import styles from "./notes.module.css";

const notes = [
  {
    title: "Sprint launch brief",
    preview:
      "Captured launch priorities, heartbeat metrics, and the team checklist for releasing the news dashboard.",
  },
  {
    title: "Marketing voice checklist",
    preview:
      "List of tone, proof points, and testimonials that should accompany every news post before it goes live.",
  },
  {
    title: "Archived Q1 retrospective",
    preview:
      "Lessons learned from the first run, archived after the board reviewed the deck.",
  },
  {
    title: "Refresh token notes",
    preview:
      "Documented the cookie lifecycle and refresh token rotation steps referenced in the server docs.",
  },
];

export default function NotesPage() {
  return (
    <div className={styles.page}>
      <main className={styles.listWrapper}>
        <h1 className={styles.title}>Notes</h1>
        <Link href="/notes/create">Create Notes</Link>
        <ul className={styles.noteList}>
          {notes.map((note) => (
            <li className={styles.noteCard} key={note.title}>
              <h2>{note.title}</h2>
              <p>{note.preview}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
