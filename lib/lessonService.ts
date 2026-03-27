import { CreateLessonBody, GetLessonsResponse, Lesson } from "@/types/lessons";
import axios from "axios";

const serverApi = axios.create({
  baseURL: "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/",
});

export const getAllLessons = async () => {
  const res = await serverApi.get<GetLessonsResponse>("/public/lessons");
  return res.data;
};

export const createLesson = async (body: CreateLessonBody) => {
  const res = await serverApi.post<{ item: Lesson }>("/public/lessons", body);
  return res.data.item;
};
