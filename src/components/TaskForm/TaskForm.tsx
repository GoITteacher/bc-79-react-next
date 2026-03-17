import css from "./TaskForm.module.css";

interface TaskFormProps {
  onSuccess: () => void;
}

export default function TaskForm({ onSuccess }: TaskFormProps) {
  return (
    <form className={css.form} action={() => {}}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button}>
        {true ? "Creating new task..." : "Create"}
      </button>
    </form>
  );
}
