import css from "./BookItem.module.css";

type BookItemProps = {
  name: string;
  author: string;
};

const BookItem = ({ name, author }: BookItemProps) => {
  return (
    <article className={css.bookItem}>
      <span className={css.indicator} aria-hidden="true" />
      <div className={css.details}>
        <p className={css.title}>{name}</p>
        <p className={css.author}>Автор: {author}</p>
      </div>
    </article>
  );
};

export default BookItem;
