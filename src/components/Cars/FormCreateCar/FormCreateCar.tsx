import css from "./FormCreateCar.module.css";

const FormCreateCar = () => {
  return (
    <form className={css["create-form"]}>
      <input type="text" name="make" placeholder="make" />
      <input type="text" name="model" placeholder="model" />
      <input type="number" name="year" placeholder="year" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="mileage" placeholder="mileage" />
      <input type="text" name="fuelType" placeholder="fuelType" />
      <input type="description" name="description" placeholder="description" />
      <input type="color" name="color" placeholder="color" />

      <button type="submit">Додати Авто</button>
    </form>
  );
};

export default FormCreateCar;
