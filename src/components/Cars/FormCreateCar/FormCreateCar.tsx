import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCarBody } from "../../../types/cars";
import css from "./FormCreateCar.module.css";
import { createCar } from "../../../services/carService";

const FormCreateCar = () => {
  const queryClient = useQueryClient();

  const carMutation = useMutation({
    mutationFn: (body: CreateCarBody) => createCar(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCars"],
      });
    },
  });

  const handleSubmit = async (formData: FormData) => {
    const newCar: CreateCarBody = {
      make: formData.get("make") as string,
      model: formData.get("model") as string,
      year: Number(formData.get("year")),
      price: Number(formData.get("price")),
      mileage: Number(formData.get("mileage")),
      fuelType: formData.get("fuelType") as string,
      description: formData.get("description") as string,
      color: formData.get("color") as string,
    };

    carMutation.mutate(newCar);
  };
  return (
    <form className={css["create-form"]} action={handleSubmit}>
      <input type="text" name="make" placeholder="make" />
      <input type="text" name="model" placeholder="model" />
      <input type="number" name="year" placeholder="year" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="mileage" placeholder="mileage" />
      <select name="fuelType">
        <option value="gasoline">gasoline</option>
        <option value="diesel">diesel</option>
        <option value="electric">electric</option>
        <option value="hybrid">hybrid</option>
      </select>
      <input type="description" name="description" placeholder="description" />
      <input type="color" name="color" placeholder="color" />
      <button type="submit">Додати Авто</button>
    </form>
  );
};

export default FormCreateCar;
