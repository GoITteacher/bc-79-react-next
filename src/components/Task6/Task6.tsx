import { useState } from "react";
import css from "./Task6.module.css";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";

interface Task6Props {}

const Task6 = ({}: Task6Props) => {
  const [users, setUsers] = useState<string[]>([]);

  const addUser = (user: string) => {
    setUsers([...users, user]);
  };

  return (
    <div className={css["task6"]}>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default Task6;
