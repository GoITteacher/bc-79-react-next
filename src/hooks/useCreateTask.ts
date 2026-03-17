import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { addTask } from "../services/taskService";
import { Task } from "../types/task";

type UseCreateTaskReturn = [
  UseMutateFunction<Task, Error, string>,
  boolean,
  boolean,
];

export const useCreateTask = (): UseCreateTaskReturn => {
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: (text: string) => addTask({ text }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getTasks"],
      });
    },
  });

  return [mutate, isError, isPending];
};
