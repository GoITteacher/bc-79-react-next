import css from "./Page.module.css";

const sleep = (n: number) => new Promise((res) => setTimeout(res, n));
const Page = async () => {
  await sleep(8000);
  return <div className={css["page"]}>/dashboard/@news/page.tsx</div>;
};

export default Page;
