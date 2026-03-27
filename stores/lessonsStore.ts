import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LessonDraft {
  title?: string;
  subject?: string;
  level?: string;
  teacher?: string;
  durationMinutes?: number;
  publishedAt?: string;
  summary?: string;
}

interface LessonStore {
  lessonDraft: LessonDraft;
  setLessonDraft: (body: LessonDraft) => void;
  clearLessonDraft: () => void;
}

export const useLessonStore = create<LessonStore>()(
  persist(
    (setStore) => {
      return {
        lessonDraft: {},

        setLessonDraft: (body) => {
          setStore({ lessonDraft: body });
        },

        clearLessonDraft: () => {
          setStore({ lessonDraft: {} });
        },
      };
    },
    {
      name: "lesson-draft",
    }
  )
);
