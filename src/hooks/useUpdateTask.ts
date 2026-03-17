import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Task, TaskUpdateData } from "../types/task";
import { updateTask } from "../services/taskService";

export const useUpdateTask = (): UseMutationResult<
  Task,
  Error,
  TaskUpdateData
> => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: (task: TaskUpdateData) => updateTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getTasks"],
      });
    },
  });

  return updateMutation;
};
