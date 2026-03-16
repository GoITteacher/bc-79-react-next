import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCarBody } from "../../../types/cars";
import css from "./FormUpdateCar.module.css";
import { updateCar } from "../../../services/carService";

const FormUpdateCar = () => {
  const queryClient = useQueryClient();
  const carMutation = useMutation({
    mutationFn: ({ id, ...body }: UpdateCarBody) =>
      updateCar(id as string, body),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCars"],
      });
    },
  });

  // const carMutation = useMutation({
  //   mutationFn: ({ id, body }: {id:string,body: UpdateCarBody}) =>
  //     updateCar(id as string, body),
  // });

  const handleSubmit = (formData: FormData) => {
    const newCar: UpdateCarBody = {
      id: formData.get("id") as string,
      make: (formData.get("make") as string) || undefined,
      model: (formData.get("model") as string) || undefined,
      year: Number(formData.get("year")) || undefined,
      price: Number(formData.get("price")) || undefined,
      mileage: Number(formData.get("mileage")) || undefined,
      fuelType: (formData.get("fuelType") as string) || undefined,
      description: (formData.get("description") as string) || undefined,
      color: (formData.get("color") as string) || undefined,
    };

    carMutation.mutate(newCar);
  };

  return (
    <form className={css["update-form"]} action={handleSubmit}>
      <input type="text" name="id" placeholder="id" />
      <input type="text" name="make" placeholder="make" />
      <input type="text" name="model" placeholder="model" />
      <input type="number" name="year" placeholder="year" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="mileage" placeholder="mileage" />
      <select name="fuelType">
        <option value="">Choose the option</option>
        <option value="gasoline">gasoline</option>
        <option value="diesel">diesel</option>
        <option value="electric">electric</option>
        <option value="hybrid">hybrid</option>
      </select>
      <input type="description" name="description" placeholder="description" />
      <input type="color" name="color" placeholder="color" />
      <button type="submit">Оновити авто</button>
    </form>
  );
};

export default FormUpdateCar;
