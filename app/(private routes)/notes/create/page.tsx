"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./formLayout.module.css";

export default function NotesCreatePage() {
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
    const content = ((formData.get("content") as string) ?? "").trim();
    const tagsInput = (formData.get("tags") as string) ?? "";
    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const archived = formData.get("archived") === "on";

    const payload: Record<string, unknown> = {
      title,
      content,
    };

    if (tags.length) {
      payload.tags = tags;
    }

    if (archived) {
      payload.archived = true;
    }

    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Failed to create note");
      }

      formElem.reset();
      router.push("/notes");
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
            Match the protected notes payload from the server.
          </p>
          <h1 className={styles.title}>New note</h1>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Title
            <input
              className={styles.input}
              name="title"
              type="text"
              placeholder="Client onboarding brief"
              required
            />
          </label>
          <label className={styles.label}>
            Content
            <textarea
              className={styles.textarea}
              name="content"
              placeholder="Add context, deliverables, and approvals."
              required
            />
          </label>
          <label className={styles.label}>
            Tags
            <input
              className={styles.input}
              name="tags"
              type="text"
              placeholder="onboarding, client"
            />
          </label>
          <label className={styles.label}>
            <span className={styles.checkboxRow}>
              <input type="checkbox" name="archived" />
              Archive note
            </span>
          </label>
          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create note"}
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
