"use client";
import { useRouter } from "next/navigation";
import styles from "./SignInForm.module.css";
import { useUserStore } from "@/store/userStore";
import { FormEvent } from "react";
import { login } from "@/lib/auth";

const SignInForm = () => {
  const router = useRouter();
  const setUser = useUserStore((s) => s.setUser);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElem = e.target as HTMLFormElement;
    const formData = new FormData(formElem);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const data = { email, password };
    const res = await login(data);
    setUser(res.user);
    router.push("/");
    formElem.reset();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="••••••••"
        />
      </label>
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
};

export default SignInForm;
