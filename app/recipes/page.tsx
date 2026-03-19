import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Recipes Page</h1>
      <p>Нижче ви можете обрати ті рецепти які вас цікалять</p>
      <div>
        <Link href="/recipes/popular">Popular</Link>
        <Link href="/recipes/new">New</Link>
        <Link href="/recipes/create">Create New Recipe</Link>
      </div>
    </div>
  );
};

export default Page;
