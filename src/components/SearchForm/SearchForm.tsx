import css from "./SearchForm.module.css";
interface SearchFormProps {
  callback: (title: string) => void;
}

export default function SearchForm({ callback }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    callback(title);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <input className={css.input} type="text" name="title" />
      <button type="submit">Search</button>
    </form>
  );
}
