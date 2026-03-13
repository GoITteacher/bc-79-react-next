import { Field, Form, Formik, FormikHelpers } from "formik";
import css from "./Form.module.css";
import * as Yup from "yup";
import clsx from "clsx";

const orderScheme = Yup.object().shape({
  type: Yup.string().required(),
  brand: Yup.string().required(),
  model: Yup.string().required(),
  summary: Yup.string().required(),
  detail: Yup.string().required(),
  budget: Yup.number().integer().min(500).required(),
  contactName: Yup.string().required(),
  contactEmail: Yup.string().email().required(),
});

interface OrderValues {
  type: string;
  brand: string;
  model: string;
  summary: string;
  detail: string;
  budget: number;
  contactName: string;
  contactEmail: string;
}

const initialValues: OrderValues = {
  type: "",
  brand: "",
  model: "",
  summary: "",
  detail: "",
  budget: 0,
  contactName: "",
  contactEmail: "",
};

export default function GadgetRepairForm() {
  const handleSubmit = (
    values: OrderValues,
    actions: FormikHelpers<OrderValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={orderScheme}
    >
      {({ errors }) => {
        const isInvalid_type = Boolean(errors.type);
        const isInvalid_brand = Boolean(errors.brand);
        const isInvalid_model = Boolean(errors.model);
        const isInvalid_summary = Boolean(errors.summary);
        const isInvalid_detail = Boolean(errors.detail);
        const isInvalid_budget = Boolean(errors.budget);
        const isInvalid_contactName = Boolean(errors.contactName);
        const isInvalid_contactEmail = Boolean(errors.contactEmail);

        return (
          <Form className={css.form}>
            <h2>Заявка на ремонт гаджета</h2>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Пристрій</legend>
              <label className={css.label} htmlFor="gadget-type">
                Тип пристрою
              </label>
              <Field
                id="gadget-type"
                name="type"
                type="text"
                className={clsx(css.input, isInvalid_type && css.invalid)}
                placeholder="Смартфон, ноутбук, планшет"
              />

              <label className={css.label} htmlFor="gadget-brand">
                Марка
              </label>
              <Field
                id="gadget-brand"
                name="brand"
                type="text"
                className={clsx(css.input, isInvalid_brand && css.invalid)}
                placeholder="Samsung, Apple, Asus"
              />

              <label className={css.label} htmlFor="gadget-model">
                Модель
              </label>
              <Field
                id="gadget-model"
                name="model"
                type="text"
                className={clsx(css.input, isInvalid_model && css.invalid)}
                placeholder="Galaxy S23, ZenBook 14"
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Проблема</legend>
              <label className={css.label} htmlFor="issue-summary">
                Короткий опис
              </label>
              <Field
                id="issue-summary"
                name="summary"
                type="text"
                className={clsx(css.input, isInvalid_summary && css.invalid)}
                placeholder="Не заряджається / тріщина екрану"
              />

              <label className={css.label} htmlFor="issue-detail">
                Детальний опис
              </label>
              <Field
                as="textarea"
                id="issue-detail"
                name="detail"
                rows={4}
                className={clsx(css.textarea, isInvalid_detail && css.invalid)}
                placeholder="Коли виникла проблема, що вже перевіряли"
              ></Field>

              <label className={css.label} htmlFor="budget">
                Орієнтовний бюджет
              </label>
              <Field
                id="budget"
                name="budget"
                type="number"
                min="0"
                step="1"
                className={clsx(css.input, isInvalid_budget && css.invalid)}
                placeholder="Напр., 1500 грн"
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Контакти</legend>
              <label className={css.label} htmlFor="contact-name">
                Ім’я
              </label>
              <Field
                id="contact-name"
                name="contactName"
                type="text"
                className={clsx(
                  css.input,
                  isInvalid_contactName && css.invalid
                )}
                placeholder="Ваше ім’я"
              />

              <label className={css.label} htmlFor="contact-email">
                Email
              </label>
              <Field
                id="contact-email"
                name="contactEmail"
                type="email"
                className={clsx(
                  css.input,
                  isInvalid_contactEmail && css.invalid
                )}
                placeholder="name@email.com"
              />
            </fieldset>

            <button type="submit" className={css.button}>
              Надіслати заявку
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
