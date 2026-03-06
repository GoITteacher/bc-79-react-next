import css from "./UserList.module.css";

interface UserListProps {
  users: string[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div className={css["userList"]}>
      <ul>
        {users.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
