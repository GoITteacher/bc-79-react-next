"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./formLayout.module.css";

const newsTypes = ["updates", "news", "testimonials", "video stories"];
const accountTypes = ["freeUser", "paidUser", "agencyUser"];

export default function NewsCreatePage() {
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
    const payload = {
      topic: (formData.get("topic") as string) ?? "",
      text: (formData.get("text") as string) ?? "",
      type: (formData.get("type") as string) ?? newsTypes[0],
      typeAccount:
        (formData.get("typeAccount") as string) ?? accountTypes[0],
    };

    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Failed to create story");
      }

      formElem.reset();
      router.push("/news");
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
            Compose the fields expected by /news POST.
          </p>
          <h1 className={styles.title}>New story</h1>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Topic
            <input
              className={styles.input}
              name="topic"
              type="text"
              placeholder="Auth refresh policy"
              required
            />
          </label>
          <label className={styles.label}>
            Text
            <textarea
              className={styles.textarea}
              name="text"
              placeholder="Share the update copy..."
              required
            />
          </label>
          <label className={styles.label}>
            Type
            <select
              className={styles.select}
              name="type"
              defaultValue={newsTypes[0]}
            >
              {newsTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Account type
            <select
              className={styles.select}
              name="typeAccount"
              defaultValue={accountTypes[0]}
            >
              {accountTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create story"}
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
