"use client";
import { getStudents } from "@/lib/studentService";
import css from "./StudentList.module.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const StudentList = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fullName = formData.get("fullname") as string;
    setQuery(fullName);
  };

  const studentsQuery = useQuery({
    queryKey: ["getStudents", query],
    queryFn: () => getStudents(query),
  });

  const students = studentsQuery.data?.items || [];

  return (
    <div className={css["studentList"]}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" placeholder="Vasya Petrenko" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {students.map((el) => {
          return (
            <li>
              {el.firstName} {el.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
