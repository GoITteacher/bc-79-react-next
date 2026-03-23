import BackButton from "@/components/BackButton/BackButton";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Profile</h1>
      <BackButton path="/settings" />
    </div>
  );
};

export default Page;
