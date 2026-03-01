/**
 * Завдання: додати типізацію пропсів книги (name, author).
 * Поки що пропси не мають типу — додайте інтерфейс або type і використайте його.
 */
import css from "./BookItem.module.css";

const BookItem = (props) => {
  const { name, author } = props;

  return (
    <div className={css["bookItem"]}>
      <p>Title: {name}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default BookItem;
