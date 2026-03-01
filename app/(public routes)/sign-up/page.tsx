"use client";

import styles from "./authForm.module.css";

export default function SignUp() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div>
          <p className={styles.overline}>Create your account</p>
          <h1 className={styles.title}>Sign up</h1>
          <p className={styles.description}>
            We store tokens client-side and refresh them via the demo server
            once you connect.
          </p>
        </div>

        <form className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </label>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your name"
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="••••••••"
            />
          </label>
          <label className={styles.label}>
            Account type
            <input
              className={styles.input}
              type="text"
              name="typeAccount"
              placeholder="freeUser"
            />
          </label>
          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
      </main>
    </div>
  );
}
