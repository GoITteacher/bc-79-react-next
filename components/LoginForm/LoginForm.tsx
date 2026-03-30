"use client";
import { getMe, login } from "@/lib/auth";
import css from "./LoginForm.module.css";
import { useAuthStore } from "@/stores/authStore";

const LoginForm = () => {
  const setUser = useAuthStore((s) => s.setUser);

  const handleSubmit = async (formData: FormData) => {
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const res = await login(data);
    setUser(res.user);
  };

  const handleGetMe = () => {
    getMe();
  };

  return (
    <div>
      <form className={css["loginForm"]} action={handleSubmit}>
        <input type="email" name="email" value="testuser@gmail.com" />
        <input type="password" name="password" value="SuperPassword" />
        <button type="submit">Sign in</button>
      </form>

      <button onClick={handleGetMe}>Get Me</button>
    </div>
  );
};

export default LoginForm;
