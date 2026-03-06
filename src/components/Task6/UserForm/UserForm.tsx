import css from "./UserForm.module.css";

interface UserFormProps {
  addUser: (user: string) => void;
}

const UserForm = ({ addUser }: UserFormProps) => {
  const handleClick = () => {
    const user = `User ${Date.now() % 60}`;
    addUser(user);
  };

  return (
    <div className={css["userForm"]}>
      <button onClick={handleClick}>Add Random User</button>
    </div>
  );
};

export default UserForm;
