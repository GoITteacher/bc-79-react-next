import css from "./UserList.module.css";

const usersMockData = [
  {
    id: 1,
    name: "Ivan Petrenko",
    email: "ivan.petrenko@example.com",
    age: 28,
    isActive: true,
    role: "admin",
  },
  {
    id: 2,
    name: "Olena Kovalenko",
    email: "olena.kovalenko@example.com",
    age: 34,
    isActive: true,
    role: "user",
  },
  {
    id: 3,
    name: "Andrii Shevchenko",
    email: "andrii.shevchenko@example.com",
    age: 41,
    isActive: false,
    role: "moderator",
  },
  {
    id: 4,
    name: "Mariia Bondar",
    email: "mariia.bondar@example.com",
    age: 22,
    isActive: true,
    role: "user",
  },
  {
    id: 5,
    name: "Dmytro Tkachenko",
    email: "dmytro.tkachenko@example.com",
    age: 30,
    isActive: false,
    role: "user",
  },
  {
    id: 6,
    name: "Iryna Melnyk",
    email: "iryna.melnyk@example.com",
    age: 27,
    isActive: true,
    role: "admin",
  },
  {
    id: 7,
    name: "Serhii Hrytsenko",
    email: "serhii.hrytsenko@example.com",
    age: 36,
    isActive: true,
    role: "user",
  },
  {
    id: 8,
    name: "Natalia Koval",
    email: "natalia.koval@example.com",
    age: 29,
    isActive: false,
    role: "moderator",
  },
  {
    id: 9,
    name: "Oleh Marchenko",
    email: "oleh.marchenko@example.com",
    age: 45,
    isActive: true,
    role: "user",
  },
  {
    id: 10,
    name: "Tetiana Savchenko",
    email: "tetiana.savchenko@example.com",
    age: 31,
    isActive: true,
    role: "user",
  },
];

const UserList = () => {
  return (
    <div className={css["user-list-container"]}>
      <ul></ul>
    </div>
  );
};

export default UserList;
