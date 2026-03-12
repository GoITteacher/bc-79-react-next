import { Pagination } from "antd";
import css from "./CarsPagination.module.css";

interface CarsPaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
  totalItems: number;
}

const CarsPagination = ({
  currentPage,
  setPage,
  totalItems,
}: CarsPaginationProps) => {
  return (
    <div className={css["carsPagination"]}>
      <Pagination
        total={totalItems}
        pageSize={10}
        current={currentPage}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
};

export default CarsPagination;
