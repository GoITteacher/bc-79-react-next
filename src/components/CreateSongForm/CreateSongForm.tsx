import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./CreateSongForm.module.css";
import * as Yup from "yup";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const SongScheme = Yup.object().shape({
  title: Yup.string().min(2).max(50).required(),
  artist: Yup.string().required(),
  album: Yup.string().required(),
  genre: Yup.string().required(),
  releaseYear: Yup.number().integer().min(2000).max(currentYear).required(),
  durationSeconds: Yup.number().integer().min(1).required(),
  label: Yup.string().required(),
  language: Yup.string().required(),
});

interface SongValues {
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
}

const initialValues: SongValues = {
  title: "",
  artist: "",
  album: "",
  genre: "",
  releaseYear: 0,
  durationSeconds: 0,
  label: "",
  language: "",
};

const CreateSongForm = () => {
  const handleSubmit = (
    song: SongValues,
    actions: FormikHelpers<SongValues>
  ) => {
    console.log(song);
    actions.resetForm();
  };

  return (
    <div className={css["createSongForm"]}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SongScheme}
      >
        <Form>
          <div>
            <Field name="title" type="text" />
            <ErrorMessage component="span" className={css.error} name="title" />
          </div>

          <div>
            <Field name="artist" type="text" />
            <ErrorMessage
              component="span"
              className={css.error}
              name="artist"
            />
          </div>
          <div>
            <Field name="album" type="text" />
            <ErrorMessage component="span" className={css.error} name="album" />
          </div>
          <div>
            <Field name="genre" type="text" />
            <ErrorMessage component="span" className={css.error} name="genre" />
          </div>
          <div>
            <Field name="releaseYear" type="number" />
            <ErrorMessage
              component="span"
              className={css.error}
              name="releaseYear"
            />
          </div>
          <div>
            <Field name="durationSeconds" type="number" />
            <ErrorMessage
              component="span"
              className={css.error}
              name="durationSeconds"
            />
          </div>
          <div>
            <Field name="label" type="text" />
            <ErrorMessage component="span" className={css.error} name="label" />
          </div>
          <div>
            <Field name="language" type="text" />
            <ErrorMessage
              component="span"
              className={css.error}
              name="language"
            />
          </div>

          <button type="submit">Create Song</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateSongForm;

/*
 */
