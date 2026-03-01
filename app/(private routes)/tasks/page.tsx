"use client";

import Link from "next/link";
import styles from "./tasks.module.css";

const tasks = [
  {
    id: "TSK-412",
    title: "Design news permission map",
    description:
      "Outline what payload fields the server sends for news so we can mock client-side details.",
  },
  {
    id: "TSK-407",
    title: "Build tasks query layer",
    description:
      "Wire the task list to show status, due date, and linked note so the UI feels cohesive.",
  },
  {
    id: "TSK-395",
    title: "Secure notes archive",
    description:
      "Add UI states for archived notes so we can approve retention policies before demo.",
  },
  {
    id: "TSK-420",
    title: "Refresh token health check",
    description:
      "Document the cookie rotation behavior described in the server docs and display it to the team.",
  },
];

export default function TasksPage() {
  return (
    <div className={styles.page}>
      <main className={styles.listWrapper}>
        <h1 className={styles.title}>Tasks</h1>
        <Link href="/tasks/create">Create Task</Link>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li className={styles.taskCard} key={task.id}>
              <p className={styles.taskId}>{task.id}</p>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
