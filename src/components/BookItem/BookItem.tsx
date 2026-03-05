import css from "./BookItem.module.css";
import Button from "../customComponents/Button/Button";

interface BookItemProps {
  img: string;
  title: string;
  author: string;
}

console.log("CSS", css);

const BookItem = ({ img, title, author }: BookItemProps) => {
  return (
    <div className={css.active}>
      <h5>{title}</h5>
      <Button>Видалити</Button>
    </div>
  );
};

export default BookItem;
