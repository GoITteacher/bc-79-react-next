import css from "./SearchForm.module.css";

interface SearchFormProps {
  handleSearch: (make: string, model: string) => void;
}

const SearchForm = ({ handleSearch }: SearchFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const make = formData.get("make") as string;
    const model = formData.get("model") as string;
    handleSearch(make, model);
  };

  return (
    <form className={css["searchForm"]} action={handleSubmit}>
      <input type="text" name="make" />
      <input type="text" name="model" />
      <button>search</button>
    </form>
  );
};

export default SearchForm;
