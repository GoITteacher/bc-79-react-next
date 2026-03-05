import BookItem from "../BookItem/BookItem";
import css from "./Container.module.css";

const books = [
  { name: "Vasya", author: "Petro", phoneNumber: 11 },
  { name: "Vasya1", author: "Petro1", phoneNumber: 22 },
  { name: "Vasya2", author: "Petro2" },
  { name: "Vasya3", author: "Petro3" },
  { name: "Vasya4", author: "Petro4" },
];

const Container = () => {
  return (
    <section className={css.section}>
      <div className={css.heading}>
        <p className={css.overline}>Колекція</p>
        <h2 className={css.title}>Список книжок</h2>
        <p className={css.subtitle}>
          Обирайте, що читати цього тижня — все акуратно розкладено для швидкого
          перегляду.
        </p>
      </div>
      <ul className={css.list}>
        {books.map((book) => {
          return (
            <BookItem key={book.name} name={book.name} author={book.author} />
          );
        })}
      </ul>
    </section>
  );
};

export default Container;
