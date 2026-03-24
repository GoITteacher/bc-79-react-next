import axios from "./serverConfig";

export interface TodoItem {
  id: number;
  todo: string;
  completed: boolean;
  userId: string;
}

interface GetTodosRes {
  todos: TodoItem[];
  limit: number;
  skip: number;
  total: number;
}

export const getTodos = async () => {
  const res = await axios.get<GetTodosRes>(`/todos`);
  return res.data;
};
