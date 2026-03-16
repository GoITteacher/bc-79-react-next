import { useQuery } from "@tanstack/react-query";
import CarItem from "./CarItem/CarItem";
import css from "./CarList.module.css";
import { getAllCars } from "../../../services/carService";

const CarList = () => {
  const carsQuery = useQuery({
    queryKey: ["getAllCars"],
    queryFn: () => getAllCars(),
  });

  const cars = carsQuery.data?.items;

  return (
    <>
      {cars && (
        <ul className={css["car-list"]}>
          {cars.map((car) => {
            return <CarItem key={car._id} car={car} />;
          })}
        </ul>
      )}
    </>
  );
};

export default CarList;
