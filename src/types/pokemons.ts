export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonDetails {
  abilities: Ability[];
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  weight: number;
  sprites: {
    back_default: string | null;
    front_default: string | null;
  };
  forms: string;
}

export interface PokemonInfo {
  name: string;
  url: string;
}

export interface GetPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonInfo[];
}
