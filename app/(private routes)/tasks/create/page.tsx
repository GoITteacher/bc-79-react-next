"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./formLayout.module.css";

const statuses = ["todo", "in-progress", "done"];

export default function TaskCreatePage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);
    setIsSubmitting(true);

    const formElem = event.currentTarget;
    const formData = new FormData(formElem);
    const title = ((formData.get("title") as string) ?? "").trim();
    const description = (formData.get("description") as string)?.trim();
    const status = (formData.get("status") as string) ?? statuses[0];
    const dueDateValue = (formData.get("dueDate") as string)?.trim();
    const dueDate = dueDateValue ? new Date(dueDateValue).toISOString() : undefined;

    const payload: Record<string, unknown> = {
      title,
      status,
    };

    if (description) {
      payload.description = description;
    }

    if (dueDate) {
      payload.dueDate = dueDate;
    }

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Failed to create task");
      }

      formElem.reset();
      router.push("/tasks");
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div>
          <p className={styles.description}>
            Create a task entry that mirrors /tasks payload.
          </p>
          <h1 className={styles.title}>New task</h1>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Title
            <input
              className={styles.input}
              name="title"
              type="text"
              placeholder="Design auth flow"
              required
            />
          </label>
          <label className={styles.label}>
            Description
            <textarea
              className={styles.textarea}
              name="description"
              placeholder="Describe the goal, acceptance, and blockers."
            />
          </label>
          <label className={styles.label}>
            Status
            <select
              className={styles.select}
              name="status"
              defaultValue="todo"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Due date
            <input className={styles.input} name="dueDate" type="date" />
          </label>
          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create task"}
          </button>
          {errorMessage && (
            <p className={`${styles.helperText} ${styles.helperTextError}`}>
              {errorMessage}
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
