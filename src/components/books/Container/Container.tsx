import BookItem from "../BookItem/BookItem";
import css from "./Container.module.css";

const books = [
  { name: "Vasya", author: "Petro" },
  { name: "Vasya1", author: "Petro1" },
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
          Обирайте, що читати цього тижня — все акуратно розкладено для швидкого перегляду.
        </p>
      </div>
      <div className={css.list}>
        {books.map((book, index) => (
          <BookItem key={`${book.name}-${index}`} name={book.name} author={book.author} />
        ))}
      </div>
    </section>
  );
};

export default Container;
