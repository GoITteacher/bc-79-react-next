import axios from "axios";

export interface Product {
  _id: string;
  name: string;
  img: string;
  category: string;
  price: number;
  size: number;
  is10PercentOff: boolean;
  popularity: number;
}

export interface GetProductsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Product[];
}
export const getProducts = async (query: string, currentPage: number) => {
  const baseUrl = "https://food-boutique.b.goit.study/api";
  const endPoint = "/products";
  const url = baseUrl + endPoint;

  const params = {
    page: currentPage,
    keyword: query,
  };

  const res = await axios.get<GetProductsResponse>(url, { params });
  return res.data;
};
