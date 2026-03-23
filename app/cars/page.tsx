import { getCars } from "@/lib/carService";
import css from "./Page.module.css";
import Link from "next/link";

const Page = async () => {
  const res = await getCars();
  const cars = res.items;

  return (
    <main className={css["page"]}>
      {cars.map((car) => {
        return (
          <li key={car._id}>
            <Link href={`/cars/${car._id}`}>
              {car.make} - {car.model}
            </Link>
          </li>
        );
      })}
    </main>
  );
};

export default Page;
