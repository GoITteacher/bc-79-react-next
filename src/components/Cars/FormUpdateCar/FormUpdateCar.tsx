import css from "./FormUpdateCar.module.css";

const FormUpdateCar = () => {
  return (
    <form className={css["update-form"]}>
      <input type="text" name="id" placeholder="id" />
      <input type="text" name="model" placeholder="model" />
      <input type="number" name="year" placeholder="year" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="speed" placeholder="speed" />
      <input type="color" name="color" placeholder="color" />
      <button type="submit">Оновити авто</button>
    </form>
  );
};

export default FormUpdateCar;
