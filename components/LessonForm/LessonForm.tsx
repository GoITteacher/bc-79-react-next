"use client";
import { useLessonStore } from "@/stores/lessonsStore";
import css from "./LessonForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateLessonBody } from "@/types/lessons";
import { createLesson } from "@/lib/lessonService";

const LessonForm = () => {
  const queryClient = useQueryClient();
  const lessonDraft = useLessonStore((s) => s.lessonDraft);
  const setLessonDraft = useLessonStore((s) => s.setLessonDraft);
  const clearLessonDraft = useLessonStore((s) => s.clearLessonDraft);

  const { mutate } = useMutation({
    mutationFn: (body: CreateLessonBody) => createLesson(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getLessons"],
      });
      clearLessonDraft();
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setLessonDraft({ ...lessonDraft, [name]: value });
  };

  const handleSubmit = () => {
    const body: CreateLessonBody = {
      title: lessonDraft.title || "",
      subject: lessonDraft.subject || "",
      level: lessonDraft.level || "",
      teacher: lessonDraft.teacher || "",
      durationMinutes: Number(lessonDraft.durationMinutes) || 0,
      publishedAt: lessonDraft.publishedAt || "",
      summary: lessonDraft.summary || "",
    };

    mutate(body);
  };

  return (
    <div className={css["container"]}>
      <form action={handleSubmit} className={css["lesson-form"]}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          defaultValue={lessonDraft.title}
        />
        <input
          type="text"
          name="subject"
          placeholder="subject"
          onChange={handleChange}
          defaultValue={lessonDraft.subject}
        />
        <select
          name="level"
          onChange={handleChange}
          defaultValue={lessonDraft.level}
        >
          <option value="beginner">beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="advanced">advanced</option>
        </select>
        <input
          type="text"
          name="teacher"
          placeholder="teacher"
          onChange={handleChange}
          defaultValue={lessonDraft.teacher}
        />
        <input
          type="number"
          name="durationMinutes"
          placeholder="durationMinutes"
          onChange={handleChange}
          defaultValue={lessonDraft.durationMinutes}
        />
        <input
          type="date"
          name="publishedAt"
          placeholder="publishedAt"
          onChange={handleChange}
          defaultValue={lessonDraft.publishedAt}
        />
        <textarea
          name="summary"
          placeholder="summary"
          onChange={handleChange}
          defaultValue={lessonDraft.summary}
        ></textarea>
        <button type="submit">Create Lesson</button>
      </form>

      <p>{JSON.stringify(lessonDraft, null, 2)}</p>
    </div>
  );
};

export default LessonForm;
