import { Pagination } from "antd";
import css from "./ProductPagination.module.css";
import ReactPaginate from "react-paginate";

interface ProductPaginationProps {
  setPage: (page: number) => void;
  totalPages: number;
  page: number;
}

const ProductPagination = ({
  page,
  setPage,
  totalPages,
}: ProductPaginationProps) => {
  return (
    <div className={css["productPagination"]}>
      <ReactPaginate
        className={css.pagination}
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        onPageChange={({ selected }) => setPage(selected + 1)}
        forcePage={page - 1}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ProductPagination;
