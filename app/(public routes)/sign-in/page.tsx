"use client";

import styles from "./authForm.module.css";
import SignInForm from "@/components/SignInForm/SignInForm";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div>
          <p className={styles.overline}>Welcome back</p>
          <h1 className={styles.title}>Sign in</h1>
          <p className={styles.description}>
            Enter the credentials you used when registering.
          </p>
        </div>

        <SignInForm />
      </main>
    </div>
  );
}
