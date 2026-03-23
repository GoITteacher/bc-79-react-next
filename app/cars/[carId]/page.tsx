import { getCarById } from "@/lib/carService";
import css from "./Page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ carId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { carId } = await params;
  const carInfo = await getCarById(carId).catch((err) => {
    return null;
  });

  if (!carInfo) {
    return notFound();
  }

  return (
    <main className={css["page"]}>
      <h1>
        {carInfo.make} - {carInfo.model}
      </h1>
      <Link href="/cars">Back to car list</Link>
    </main>
  );
};

export default Page;
