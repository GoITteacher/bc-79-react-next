interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: string;
  dueDate: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface GetTodosParams {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: string;
  completed?: boolean;
  priority?: string;
  category?: string;
  title?: string;
  tag?: string;
}

export interface GetTodosResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  todos: Todo[];
}

export interface CreateTodoBody {
  title: string;
  description: string;
  completed: boolean;
  priority: string;
  dueDate: string;
  category: string;
  tags: string[];
}

export interface UpdateTodoBody {
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: string;
  dueDate?: string;
  category?: string;
  tags?: string[];
}

export interface CreateTodoResponse {
  todo: Todo;
}
