/**
 * React + TypeScript: типізація списків і пропсів.
 * Завдання:
 * 1) Додай тип для масиву books замість неявного any.
 * 2) Пропсах BookItem зафіксуй типи name/author.
 * 3) Додай key у map і тип для book всередині ітерації.
 */
import BookItem from "../BookItem/BookItem";

const books = [
  { name: "Vasya", author: "Petro" },
  { name: "Vasya1", author: "Petro1" },
  { name: "Vasya2", author: "Petro2" },
  { name: "Vasya3", author: "Petro3" },
  { name: "Vasya4", author: "Petro4" },
];

const Container = () => {
  return (
    <div>
      {books.map((book, index) => (
        <BookItem key={index} name={book.name} author={book.author} />
      ))}
    </div>
  );
};

export default Container;
