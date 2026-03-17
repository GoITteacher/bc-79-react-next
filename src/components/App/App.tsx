import { useState } from "react";
import { useDebounce } from "use-debounce";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import css from "./App.module.css";
import UserList from "../UserList/UserList";

export default function App() {
  return (
    <div className={css.container}>
      <UserList />
      <hr />
      <header className={css.header}>
        <SearchBox value={""} onSearch={() => {}} />
        <SortFilter />
        <button className={css.createButton} onClick={() => {}}>
          Create task
        </button>
      </header>

      <strong className={css.loading}>Loading tasks...</strong>
      <TaskList tasks={[]} />
    </div>
  );
}
