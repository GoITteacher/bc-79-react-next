import css from "./UserCard.module.css";

interface UserCardProps {
  user: { firstname: string; age: number };
}

const UserCard = ({ user }: UserCardProps) => {
  const handleClick = () => {
    console.log(user.age);
  };

  return (
    <div className={css["userCard"]}>
      <p>Firstname: {user.firstname}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleClick}>Show More Info</button>
    </div>
  );
};

export default UserCard;
