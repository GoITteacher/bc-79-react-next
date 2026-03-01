import { useQuery } from "@tanstack/react-query";
import css from "./Tasks.module.css";
import { getTasks } from "../../services/taskService";
import { useState } from "react";
import TaskList from "./TaskList/TaskList";
import Modal from "./Modal/Modal";
import TaskForm from "./TaskForm/TaskForm";

const Tasks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={css["container"]}>
      <header className={css.header}>
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && <TaskList tasks={data} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Tasks;
