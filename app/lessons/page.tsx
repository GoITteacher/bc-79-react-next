import css from "./page.module.css";
import LessonForm from "@/components/LessonForm/LessonForm";
import LessonList from "@/components/LessonList/LessonList";

const Page = () => {
  return (
    <div className={css["page"]}>
      <LessonForm />
      <LessonList />
    </div>
  );
};

export default Page;
