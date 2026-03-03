import axios from "axios";
import type {
  CreateTodoBody,
  CreateTodoResponse,
  GetTodosParams,
  GetTodosResponse,
  UpdateTodoBody,
} from "../types/todos";
axios.defaults.baseURL =
  "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";

export async function getTodos(params: GetTodosParams) {
  const res = await axios.get<GetTodosResponse>("/todos", { params });
  return res.data;
}

export async function createTodo(body: CreateTodoBody) {
  const res = await axios.post<CreateTodoResponse>("/todos", body);
  return res.data;
}

export async function getTodoById(todoId: string) {
  const res = await axios.get<CreateTodoResponse>(`/todos/${todoId}`);
  return res.data;
}

export async function updateTodo(todoId: string, body: UpdateTodoBody) {
  const res = await axios.patch<CreateTodoResponse>(`/todos/${todoId}`, body);
  return res.data;
}

export async function deleteTodo(todoId: string) {
  return await axios.patch(`/todos/${todoId}`);
}
