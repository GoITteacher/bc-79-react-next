import axios from "axios";

export async function getProductCategories() {
  const baseURL = "https://food-boutique.b.goit.study/api";
  const endPoint = "/products/categories";
  const url = baseURL + endPoint;

  const res = await axios.get<string[]>(url);
  return res.data;
}

export async function getProductsByCategory(category: string) {
  const baseURL = "https://food-boutique.b.goit.study/api";
  const endPoint = "/products";
  const url = baseURL + endPoint;

  const params = { category };

  const res = await axios.get<GetProductsResponse>(url, { params });
  return res.data;
}
