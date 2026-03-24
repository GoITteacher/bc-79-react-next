import css from "./Page.module.css";
const sleep = (n: number) => new Promise((res) => setTimeout(res, n));

const Page = async () => {
  await sleep(1000);
  return <div className={css["page"]}>/dashboard/@users/default.tsx</div>;
};

export default Page;
