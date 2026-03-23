import LoginForm from "@/components/LoginForm/LoginForm";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <LoginForm />
    </div>
  );
};

export default Page;
