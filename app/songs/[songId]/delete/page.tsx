import DeleteSongBtn from "@/components/DeleteSongBtn/DeleteSongBtn";
import css from "./Page.module.css";

const Page = async () => {
  return (
    <div className={css["page"]}>
      <p>Ви дійсно бажаєте видалити цю пісню</p>
      <DeleteSongBtn />
    </div>
  );
};

export default Page;
