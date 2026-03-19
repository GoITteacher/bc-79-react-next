import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Create Page</h1>
      <Link href="/recipes">Back to Recipes Page</Link>
    </div>
  );
};

export default Page;
