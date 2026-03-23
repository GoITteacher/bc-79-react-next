"use client";
import { useRouter } from "next/navigation";
import css from "./BackButton.module.css";
interface BackButtonProps {
  path: string;
}
const BackButton = ({ path }: BackButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    // router.push(path);
    router.back();
  };

  return (
    <button onClick={handleClick} className={css["backButton"]}>
      Back
    </button>
  );
};

export default BackButton;
