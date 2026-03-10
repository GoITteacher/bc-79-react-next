import { useEffect, useState } from "react";
import css from "./ProductList.module.css";
import { getProducts, Product } from "../../services/products";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const data = await getProducts(page);
  //       setProducts(data.results);
  //     }
  //     fetchData();
  //   }, [page]);

  return (
    <div className={css["productList"]}>
      <ul>
        {products.map((el) => {
          return <li>{el.name}</li>;
        })}
      </ul>
      <button onClick={() => setPage(page - 1)}>Prev Page ({page})</button>
      <button onClick={() => setPage(page + 1)}>Next Page ({page})</button>
    </div>
  );
};

export default ProductList;

//!=========================================
