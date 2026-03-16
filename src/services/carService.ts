import axios from "axios";
import {
  Car,
  CreateCarBody,
  GetAllCarsResponse,
  UpdateCarBody,
} from "../types/cars";

const serverApi = axios.create({
  baseURL: "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com",
});

export const getAllCars = async () => {
  const res = await serverApi.get<GetAllCarsResponse>("/public/cars");
  return res.data;
};

export const createCar = async (body: CreateCarBody) => {
  const res = await serverApi.post<{ item: Car }>("/public/cars", body);
  return res.data.item;
};
export const updateCar = async (id: string, body: UpdateCarBody) => {
  const res = await serverApi.put<{ item: Car }>(`/public/cars/${id}`, body);
  return res.data.item;
};

export const deleteCar = async (id: string) => {
  const res = await serverApi.delete(`/public/cars/${id}`);
  return res.data;
};
