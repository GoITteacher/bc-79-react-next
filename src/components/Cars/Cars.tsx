import { useState } from "react";
import css from "./Cars.module.css";
import SearchForm from "./SearchForm/SearchForm";
import { useQuery } from "@tanstack/react-query";
import { getCarList } from "../../services/carService";
import CarList from "./CarList/CarList";
import CarsPagination from "./CarsPagination/CarsPagination";

const Cars = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = (make: string, model: string) => {
    setMake(make);
    setModel(model);
    setPage(1);
  };

  const carsQuery = useQuery({
    queryKey: ["getCarList", { page, model, make }],
    queryFn: () => getCarList({ make, model, page }),
    refetchOnReconnect: true,
  });

  const totalItems = carsQuery.data?.totalItems || 1;
  const cars = carsQuery.data?.items || [];
  const isLoading = carsQuery.isLoading;
  const isError = carsQuery.isError;

  return (
    <div className={css["cars"]}>
      <SearchForm handleSearch={handleSearch} />
      <CarList cars={cars} />
      <CarsPagination
        currentPage={page}
        setPage={setPage}
        totalItems={totalItems}
      />
    </div>
  );
};

export default Cars;
