import { Field, Form, Formik } from "formik";
import css from "./Form.module.css";
import * as Yup from "yup";
import clsx from "clsx";

const eventScheme = Yup.object().shape({
  title: Yup.string().min(1).max(10).required(),
  format: Yup.string().min(1).max(10).required(),
});

const sleep = (d: number) => new Promise((res) => setTimeout(res, d));

const initialValues = {
  title: "",
  format: "",
  price: "",
  summary: "",
  detail: "",
  organizerName: "",
  organizerEmail: "",
  role: "",
};

export default function EventProposalForm() {
  const handleSubmit = async (values) => {
    await sleep(3000);
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={eventScheme}
    >
      {({ isSubmitting, errors }) => {
        const isInvalidTitle = Boolean(errors.title);
        const isInvalidFormat = Boolean(errors.format);

        return (
          <Form className={css.form}>
            <h2>Подання ідеї заходу</h2>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Базова інформація</legend>
              <label className={css.label} htmlFor="event-title">
                Назва події
              </label>
              <Field
                id="event-title"
                name="title"
                type="text"
                className={clsx(css.input, isInvalidTitle && css.invalid)}
                placeholder="Напр., Вечір стартап-пітчів"
              />

              <label className={css.label} htmlFor="event-format">
                Формат
              </label>
              <Field
                id="event-format"
                name="format"
                type="text"
                className={clsx(css.input, isInvalidFormat && css.invalid)}
                placeholder="Онлайн / офлайн / змішаний"
              />

              <label className={css.label} htmlFor="event-price">
                Орієнтовна вартість квитка
              </label>
              <Field
                id="event-price"
                name="price"
                type="number"
                min="0"
                step="1"
                className={css.input}
                placeholder="300 грн"
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Опис</legend>
              <label className={css.label} htmlFor="event-summary">
                Короткий опис
              </label>
              <Field
                id="event-summary"
                name="summary"
                type="text"
                className={css.input}
                placeholder="Що це за подія"
              />

              <label className={css.label} htmlFor="event-detail">
                Деталі та програма
              </label>
              <Field
                as="textarea"
                id="event-detail"
                name="detail"
                rows={4}
                className={css.textarea}
                placeholder="Ключові спікери, тривалість, теми"
              ></Field>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Контакти організатора</legend>
              <label className={css.label} htmlFor="organizer-name">
                Ім’я
              </label>
              <Field
                id="organizer-name"
                name="organizerName"
                type="text"
                className={css.input}
                placeholder="Ваше ім’я"
              />

              <label className={css.label} htmlFor="organizer-email">
                Email
              </label>
              <Field
                id="organizer-email"
                name="organizerEmail"
                type="email"
                className={css.input}
                placeholder="name@email.com"
              />

              <label className={css.label} htmlFor="organizer-role">
                Роль / компанія
              </label>
              <Field
                id="organizer-role"
                name="role"
                type="text"
                className={css.input}
                placeholder="Напр., координатор, ГО/компанія"
              />
            </fieldset>

            <button
              type="submit"
              className={css.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Надсилаємо" : "Надіслати ідею"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
