import axios from "axios";
import { CocktailDetails } from "@/lib/types/cocktail";

interface Cocktail {
  _id: string;
  drinkThumb: string;
  drink: string;
  description: string;
}

export const getRandomCocktails = async () => {
  const res = await axios.get<Cocktail[]>(
    "https://drinkify.b.goit.study/api/v1/cocktails/?r=15"
  );
  return res.data;
};

export const getCocktailDetails = async (id: string) => {
  const res = await axios.get<CocktailDetails[]>(
    "https://drinkify.b.goit.study/api/v1/cocktails/lookup",
    { params: { id } }
  );

  return res.data[0];
};
