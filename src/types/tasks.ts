export interface Task {
  _id: string;
  userId: string;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetTasksResponse {
  tasks: Task[];
}
