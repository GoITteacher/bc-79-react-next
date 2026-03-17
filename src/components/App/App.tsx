import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import css from "./App.module.css";
import { useModal } from "../../hooks/useModal";
import { useTasks } from "../../hooks/useTasks";

export default function App() {
  const [query, setQuery] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal();
  const [tasks, isLoading] = useTasks(query);

  return (
    <div className={css.container}>
      <hr />
      <header className={css.header}>
        <SearchBox value={query} onSearch={setQuery} />
        <SortFilter />
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>

      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {!isLoading && <TaskList tasks={tasks} />}

      {isOpenModal && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={() => {}}></TaskForm>
        </Modal>
      )}
    </div>
  );
}
