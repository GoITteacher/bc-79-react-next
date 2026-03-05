import clsx from "clsx";
import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  description?: string;
  isPrimary?: boolean;
}

const Button = ({ children, description, isPrimary }: ButtonProps) => {
  const customClassName = clsx(css.button, isPrimary && css.isPrimary);
  return (
    <button className={customClassName}>
      {description && <p>{description}</p>}
      {children}
    </button>
  );
};

export default Button;
