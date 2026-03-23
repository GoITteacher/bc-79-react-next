import { getCars } from "@/lib/carService";
import css from "./Page.module.css";
import BackButton from "@/components/BackButton/BackButton";

interface PageProps {
  params: Promise<{ tags: string[] }>;
}

const Page = async ({ params }: PageProps) => {
  const { tags } = await params;
  const make = tags[0];
  const model = tags[1];
  const year = Number(tags[2]);

  const cars = await getCars({
    make: make != "all" ? make : undefined,
    model,
    year: year || undefined,
  });

  return (
    <div className={css["page"]}>
      <h1>SEARCH CARS</h1>
      <BackButton path="/cars" />
      <p>TAGS: {tags.join(", ")}</p>

      <ul>
        {cars.items.map((el) => {
          return (
            <li key={el._id}>
              {el.make} {el.model} {el.year}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
