import CarItem from "./CarItem/CarItem";
import css from "./CarList.module.css";

const CarList = () => {
  return (
    <ul className={css["car-list"]}>
      <CarItem />
      <CarItem />
      <CarItem />
      <CarItem />
    </ul>
  );
};

export default CarList;
