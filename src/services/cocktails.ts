import axios from "axios";

export interface Cocktail {
  _id: string;
  drink: string;
  drinkThumb: string;
  description: string;
}

export const getRandomCocktails = async () => {
  const baseUrl = "https://drinkify.b.goit.study/api/v1";
  const endPoint = "/cocktails/";
  const url = baseUrl + endPoint;

  const params = {
    r: 8,
  };

  const res = await axios.get<Cocktail[]>(url, { params });
  return res.data;
};
