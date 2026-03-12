import { useState } from "react";
import ProductList from "./ProductList/ProductList";
import ProductPagination from "./ProductPagination/ProductPagination";
import css from "./Products.module.css";
import SearchForm from "./SearchForm/SearchForm";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products";
import { Empty, Spin } from "antd";

const Products = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const productsQuery = useQuery({
    queryKey: ["getProducts", query, page],
    queryFn: () => getProducts(query, page),
    enabled: query !== "" && page > 0,
    placeholderData: keepPreviousData,
  });

  const handleSearch = (title: string) => {
    setQuery(title);
    setPage(1);
  };

  const totalPages = productsQuery.data?.totalPages || 1;
  const results = productsQuery.data?.results || [];
  const isLoading = productsQuery.isLoading;
  const isError = productsQuery.isError;

  return (
    <div className={css["products"]}>
      {isLoading && (
        <div className={css.loading}>
          <Spin></Spin>
        </div>
      )}

      <SearchForm setQuery={handleSearch} />
      <p>
        {query} | {page}
      </p>
      {isError && <Empty description="Error" />}
      <ProductList products={results} />
      <ProductPagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Products;
