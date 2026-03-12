import { Car } from "../../../types/cars";
import css from "./CarList.module.css";

interface CarListProps {
  cars: Car[];
}

const CarList = ({ cars }: CarListProps) => {
  return (
    <ul className={css.carList}>
      {cars.map((car) => {
        return (
          <li key={car._id} className={css.item}>
            <article className={css.card}>
              <h3 className={css.title}>
                {car.make} {car.model}
              </h3>

              <div className={css.meta}>
                <span>{car.year}</span>
                <span>{car.color}</span>
              </div>

              <div className={css.specs}>
                <span>⛽ {car.fuelType}</span>
                <span>🚗 {car.mileage.toLocaleString()} km</span>
              </div>

              <p className={css.description}>{car.description}</p>

              <div className={css.price}>${car.price.toLocaleString()}</div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
