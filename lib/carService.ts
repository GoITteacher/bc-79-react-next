import { Car, GetCarsResponse } from "@/types/cars";
import { serverApi } from "./serverConfig";

interface GetCarsProps {
  make?: string;
  model?: string;
  year?: number;
}
export const getCars = async (params: GetCarsProps = {}) => {
  console.log(params);

  const res = await serverApi.get<GetCarsResponse>("/public/cars", { params });
  return res.data;
};

export const getCarById = async (id: string) => {
  const res = await serverApi.get<{ item: Car }>(`/public/cars/${id}`);
  return res.data.item;
};
