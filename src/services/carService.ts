import axios from "axios";
import { GetCarListParams, GetCarListResponse } from "../types/cars";

export const getCarList = async (userParams: GetCarListParams) => {
  const baseURL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/cars";
  const url = baseURL + endPoint;

  const params = {
    perPage: 10,
    ...userParams,
  };

  const res = await axios.get<GetCarListResponse>(url, { params });
  return res.data;
};
