import clsx from "clsx";
import { Car } from "../../../types/cars";
import Button from "../../customComponents/Button/Button";
import css from "./CarItem.module.css";

interface CarItemProps {
  car: Car;
}

const CarItem = ({ car }: CarItemProps) => {
  const myClassName = clsx(
    css.carItem,
    css.box,
    "custom-animation",
    car.isSportCar && css["is-sportcar"]
  );

  return (
    <div className={myClassName}>
      <div className={css.header}>
        <h3 className={css.title}>
          {car.brand} {car.model}
        </h3>

        {car.isSportCar && <span className={css.sportBadge}>Sport</span>}
      </div>

      <div className={css.info}>
        <div className={css.row}>
          <span className={css.label}>Type:</span>
          <span>{car.type}</span>
        </div>

        <div className={css.row}>
          <span className={css.label}>Year:</span>
          <span>{car.year}</span>
        </div>

        <div className={css.row}>
          <span className={css.label}>Color:</span>
          <span>{car.color}</span>
        </div>

        <div className={css.row}>
          <span className={css.label}>Price:</span>
          <span className={css.price}>${car.price}</span>
          {car.price < 30000 && (
            <span className={css.sale}>Супер пропозиція</span>
          )}
        </div>

        <div className={css.row}>
          <span className={css.label}>Available:</span>
          <span>{car.amount}</span>
        </div>

        {car.amount > 0 && (
          <div className={css.row}>
            <Button>Купити</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarItem;
