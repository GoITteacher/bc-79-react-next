import Link from "next/link";
import css from "./Page.module.css";
import { getPokemonDetails } from "@/lib/pokemonService";

interface PageProps {
  params: Promise<{ pokemonId: string }>;
}
const sleep = () => new Promise((res) => setTimeout(res, 3000));
const Page = async ({ params }: PageProps) => {
  await sleep();
  const { pokemonId } = await params;
  const pokemon = await getPokemonDetails(pokemonId);

  return (
    <main className={css["page"]}>
      <div>
        <h1>Pokemon Details</h1>
        <h2>{pokemon.name}</h2>
        <Link href="/pokemons">Back</Link>

        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>

        <div>
          <Link href={`/pokemons/${pokemonId}/edit`}>Edit</Link>
          <Link href={`/pokemons/${pokemonId}/delete`}>Delete</Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
