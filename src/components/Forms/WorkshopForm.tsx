import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./Form.module.css";
import * as Yup from "yup";
import clsx from "clsx";

const WorkShopSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(20),
  email: Yup.string().email(),
  phone: Yup.string().matches(
    /^\+380\s?\d{2}\s?\d{3}\s?\d{4}$/,
    "Номер має бути у форматі - +380 22 222 2222"
  ),
  track: Yup.string().required(),
  question: Yup.string(),
  experience: Yup.string(),
});

interface WorkShopValues {
  name: string;
  email: string;
  phone: string;
  track: string;
  question: string;
  experience: string;
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  track: "",
  question: "",
  experience: "",
};
export default function WorkshopForm() {
  const handleSubmit = (
    values: WorkShopValues,
    actions: FormikHelpers<WorkShopValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={WorkShopSchema}
    >
      {({ errors }) => {
        const phoneIsInvalid = Boolean(errors.phone);

        return (
          <Form className={css.form}>
            <h2>Реєстрація на воркшоп</h2>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Учасник</legend>
              <label className={css.label} htmlFor="workshop-name">
                Ім’я та прізвище
              </label>
              <Field
                id="workshop-name"
                name="name"
                type="text"
                className={css.input}
                placeholder="Олена Іваненко"
              />

              <label className={css.label} htmlFor="workshop-email">
                Email
              </label>
              <Field
                id="workshop-email"
                name="email"
                type="email"
                className={css.input}
                placeholder="name@email.com"
              />

              <label className={css.label} htmlFor="workshop-phone">
                Телефон <ErrorMessage name="phone" component="span" />
              </label>

              <Field
                id="workshop-phone"
                name="phone"
                type="tel"
                className={clsx(css.input, phoneIsInvalid && css.invalid)}
                placeholder="+380 XX XXX XXXX"
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Формат</legend>
              <label className={css.label} htmlFor="track">
                Трек
              </label>
              <Field
                as="select"
                id="track"
                name="track"
                className={css.input}
                defaultValue=""
              >
                <option value="" disabled>
                  Обери трек
                </option>
                <option value="design">Product design</option>
                <option value="frontend">Frontend</option>
                <option value="marketing">Growth & marketing</option>
              </Field>

              <p className={css.label}>Рівень досвіду</p>
              <label className={css.option}>
                <Field type="radio" name="experience" value="beginner" />
                Початківець
              </label>
              <label className={css.option}>
                <Field type="radio" name="experience" value="mid" />
                Middle
              </label>
              <label className={css.option}>
                <Field type="radio" name="experience" value="senior" />
                Senior
              </label>
            </fieldset>

            <label className={css.label} htmlFor="workshop-question">
              Питання чи побажання
            </label>
            <Field
              as="textarea"
              id="workshop-question"
              name="question"
              rows={4}
              className={css.textarea}
              placeholder="Опиши, що хочеш отримати від події"
            ></Field>

            <button type="submit" className={css.button}>
              Зареєструватися
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
