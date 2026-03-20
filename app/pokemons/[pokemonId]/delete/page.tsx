import css from "./Page.module.css";
interface PageProps {
  params: Promise<{ pokemonId: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { pokemonId } = await params;

  return (
    <div className={css["page"]}>
      <p>Ви дійсно бажаєте видалити {pokemonId}</p>
      <button>YES</button>
    </div>
  );
};

export default Page;
