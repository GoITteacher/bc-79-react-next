import { getProductCategories } from "@/lib/productService";
import css from "./ProductCategories.module.css";
import Link from "next/link";

const ProductCategories = async () => {
  const categories = await getProductCategories();
  console.log(categories);

  return (
    <ul className={css["productCategories"]}>
      {categories.map((el) => {
        return (
          <li key={el}>
            <Link href={`/products/category/${el}`}>{el}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductCategories;
