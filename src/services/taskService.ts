import axios from "axios";
import type { GetTasksResponse } from "../types/tasks";
axios.defaults.baseURL =
  "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";

export async function getTasks() {
  const res = await axios.get<GetTasksResponse>("/tasks");
  return res.data;
}

export async function createTask() {}
export async function getTaskById() {}
export async function updateTask() {}
export async function deleteTask() {}
