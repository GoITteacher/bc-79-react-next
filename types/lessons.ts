export interface Lesson {
  _id: string;
  title: string;
  subject: string;
  level: string;
  teacher: string;
  durationMinutes: number;
  publishedAt: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLessonBody {
  title: string;
  subject: string;
  level: string;
  teacher: string;
  durationMinutes: number;
  publishedAt: string;
  summary: string;
}

export interface GetLessonsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Lesson[];
}
