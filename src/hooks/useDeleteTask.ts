import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteTask } from "../services/taskService";
import { Task } from "../types/task";

type UseDeleteTask = [UseMutateFunction<Task, Error, string>, boolean, boolean];

export const useDeleteTask = (): UseDeleteTask => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getTasks"],
      });
    },
  });

  return [
    deleteMutation.mutate,
    deleteMutation.isPending,
    deleteMutation.isError,
  ];
};
