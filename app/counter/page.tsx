import Counter from "@/components/Counter/Counter";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Counter</h1>
      <Counter />
    </div>
  );
};

export default Page;
