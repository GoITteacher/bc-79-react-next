import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Car } from "../../../../types/cars";
import css from "./CarItem.module.css";
import { Flex } from "antd";
import { deleteCar } from "../../../../services/carService";

interface CarItemProps {
  car: Car;
}
const CarItem = ({ car }: CarItemProps) => {
  const queryClient = useQueryClient();

  const carsMutation = useMutation({
    mutationFn: () => deleteCar(car._id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCars"],
      });
    },
    onError: (error) => {
      console.log("");
    },
  });

  const handleDeleteClick = () => {
    carsMutation.mutate();
  };

  return (
    <li className={css["car-item"]}>
      <Flex gap="large">
        <p>{car._id}</p>
        <p>
          {car.make} - {car.model}
        </p>
        <p>{car.year}</p>
        <p>{car.price}</p>
        <p>{car.color}</p>
      </Flex>
      <Flex gap="small">
        <button className={css["sell-btn"]}>Продати</button>
        <button className={css["remove-btn"]} onClick={handleDeleteClick}>
          Видалити
        </button>
      </Flex>
    </li>
  );
};

export default CarItem;
