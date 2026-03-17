import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/taskService";
import { useDebounce } from "use-debounce";
import { Task } from "../types/task";

type UseTasksReturn = [Task[], boolean];

export const useTasks = (query: string): UseTasksReturn => {
  const [value] = useDebounce(query, 300);
  const tasksQuery = useQuery({
    queryKey: ["getTasks", value],
    queryFn: () => getTasks(value),
  });

  const tasks = tasksQuery.data || [];
  const isLoading = tasksQuery.isLoading;

  return [tasks, isLoading];
};
