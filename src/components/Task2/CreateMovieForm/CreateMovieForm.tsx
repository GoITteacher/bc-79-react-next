import { useId } from "react";
import css from "./CreateMovieForm.module.css";
import { CreateMovieBody } from "../../../types/movies";
import { getYear } from "./createMovieHelpers";

interface CreateMovieFormProps {
  callback: (movieInfo: CreateMovieBody) => void;
}

const CreateMovieForm = ({ callback }: CreateMovieFormProps) => {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const movieInfo: CreateMovieBody = {
      title: formData.get("title") as string,
      director: formData.get("director") as string,
      genre: formData.get("genre") as string,
      language: formData.get("language") as string,
      summary: formData.get("summary") as string,
      durationMinutes: Number(formData.get("durationMinutes")),
      releaseYear: getYear(formData.get("releaseYear") as string), //'14.03.2026'
      rating: Number(formData.get("rating")),
    };
    callback(movieInfo);
  };

  return (
    <div className={css["createMovieForm"]}>
      <form className={css.form} action={handleSubmit}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Movie info:</legend>
          <label className={css.label} htmlFor={`title:${id}`}>
            Title
          </label>
          <input
            className={css.input}
            type="text"
            name="title"
            id={`title:${id}`}
          />

          <label className={css.label} htmlFor={`title:${id}`}>
            CV
          </label>
          <input
            className={css.input}
            type="file"
            name="file"
            id={`file:${id}`}
          />

          <label className={css.label} htmlFor={`director:${id}`}>
            director
          </label>
          <input
            className={css.input}
            type="text"
            name="director"
            id={`director:${id}`}
          />

          <label className={css.label} htmlFor={`genre:${id}`}>
            genre
          </label>
          <input
            className={css.input}
            type="text"
            name="genre"
            id={`genre:${id}`}
            value="sci-fi"
          />

          <label className={css.label} htmlFor={`language:${id}`}>
            language
          </label>
          <input
            className={css.input}
            type="text"
            name="language"
            id={`language:${id}`}
            value={"en"}
          />

          <label className={css.label} htmlFor={`summary:${id}`}>
            Summary
          </label>
          <textarea
            className={css.input}
            name="summary"
            id={`summary:${id}`}
          ></textarea>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Additional Info:</legend>
          <label className={css.label} htmlFor={`releaseYear:${id}`}>
            releaseYear
          </label>
          <input
            className={css.input}
            type="date"
            name="releaseYear"
            id={`releaseYear:${id}`}
          />

          <label className={css.label} htmlFor={`rating:${id}`}>
            rating
          </label>
          <input
            className={css.input}
            type="number"
            name="rating"
            id={`rating:${id}`}
          />

          <label className={css.label} htmlFor={`durationMinutes:${id}`}>
            durationMinutes
          </label>
          <input
            className={css.input}
            type="number"
            name="durationMinutes"
            id={`durationMinutes:${id}`}
            value={160}
          />
        </fieldset>

        <button type="submit" className={css.button}>
          Create Movie
        </button>
      </form>
    </div>
  );
};

export default CreateMovieForm;
