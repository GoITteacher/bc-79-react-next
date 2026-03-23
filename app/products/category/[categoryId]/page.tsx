import { getProductsByCategory } from "@/lib/productService";
import css from "./Page.module.css";
interface PageProps {
  params: Promise<{ categoryId: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { categoryId } = await params;
  const res = await getProductsByCategory(categoryId);
  console.log(res);

  return (
    <div className={css["page"]}>
      <ul>
        {res.results.map((el) => {
          return <li>{el.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Page;
