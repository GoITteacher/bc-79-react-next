"use client";

import { useRouter } from "next/navigation";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    console.log("SUBMIT");
    router.push("/");
  };

  return (
    <form className={css["loginForm"]} action={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="login" />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default LoginForm;
