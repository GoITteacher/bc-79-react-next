import CarList from "./CarList/CarList";
import css from "./Cars.module.css";
import { Flex } from "antd";
import FormCreateCar from "./FormCreateCar/FormCreateCar";
import FormUpdateCar from "./FormUpdateCar/FormUpdateCar";

const Cars = () => {
  return (
    <div className={css["container"]}>
      <Flex justify="space-between">
        <FormCreateCar />
        <FormUpdateCar />
      </Flex>

      <CarList />
    </div>
  );
};

export default Cars;
