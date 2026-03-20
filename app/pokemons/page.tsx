import LoginForm from "@/components/LoginForm/LoginForm";
import { getPokemons } from "@/lib/pokemonService";
import Link from "next/link";
const sleep = () => new Promise((res) => setTimeout(res, 3000));
const Page = async () => {
  await sleep();
  const pokemons = await getPokemons();

  return (
    <main>
      <h1>Pokemons</h1>
      <ul>
        {pokemons.map((el) => {
          return (
            <li>
              <Link href={`/pokemons/${el.name}`}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
