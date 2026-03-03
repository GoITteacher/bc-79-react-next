import axios from "axios";
import type { GetPokemonsResponse, PokemonDetails } from "../types/pokemons";

export async function getPokemonList(limit: number = 10, offset: number = 0) {
  const params = {
    limit: limit,
    offset: offset,
  };
  const res = await axios.get<GetPokemonsResponse>(
    `https://pokeapi.co/api/v2/pokemon`,
    { params },
  );
  return res.data;
}

export async function getPokemonByName(name: string) {
  const res = await axios.get<PokemonDetails>(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
  );
  return res.data;
}
