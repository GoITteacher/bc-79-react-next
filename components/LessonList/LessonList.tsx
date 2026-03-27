"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./LessonList.module.css";
import { getAllLessons } from "@/lib/lessonService";

const LessonList = () => {
  const lessonsQuery = useQuery({
    queryKey: ["getLessons"],
    queryFn: () => getAllLessons(),
  });

  const isLoading = lessonsQuery.isLoading;
  const isError = lessonsQuery.isError;
  const lessons = lessonsQuery.data?.items || [];

  return (
    <div className={css["lessonList"]}>
      <ul>
        {lessons.map((el) => {
          return <li>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default LessonList;
