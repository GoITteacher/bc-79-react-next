import css from "./SearchForm.module.css";

interface SearchFormProps {
  setQuery: (value: string) => void;
}

const SearchForm = ({ setQuery }: SearchFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    setQuery(title);
  };

  return (
    <form className={css["searchForm"]} action={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">saerch</button>
    </form>
  );
};

export default SearchForm;
