import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}
interface PokemonResponse {
  results: Pokemon[];
}
interface PokemonDetails {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  weight: number;
}

export const getPokemons = async () => {
  const baseUrl = "https://pokeapi.co/api/v2";
  const endPoint = "/pokemon?limit=10&offset=0";
  const res = await axios.get<PokemonResponse>(baseUrl + endPoint);
  return res.data.results;
};

export const getPokemonDetails = async (name: string) => {
  const baseUrl = "https://pokeapi.co/api/v2";
  const endPoint = `/pokemon/${name}`;
  const res = await axios.get<PokemonDetails>(baseUrl + endPoint);
  return res.data;
};
