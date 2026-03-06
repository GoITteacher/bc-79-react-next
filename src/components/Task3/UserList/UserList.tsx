import css from "./UserList.module.css";

const users = [
  { firstname: "Vasya", age: 25 },
  { firstname: "Anton", age: 21 },
  { firstname: "Max", age: 22 },
  { firstname: "Roman", age: 23 },
  { firstname: "Petro", age: 24 },
];

const UserList = () => {
  const handleClick = (user) => {
    console.log(user);
  };

  return (
    <div className={css["userList"]}>
      <ul>
        {users.map((item, i) => {
          return (
            <li key={i}>
              <button onClick={() => handleClick(item)}>SHOW USER INFO</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
