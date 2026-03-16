import css from "./TaskList.module.css";

export default function TaskList({ tasks }) {
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            className={css.checkbox}
          />
          <span className={css.text}>{task.text}</span>
          <button type="button" className={css.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
