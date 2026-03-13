import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./OrderForm.module.css";
import * as Yup from "yup";

const deliveryOptions: DeliveryType[] = ["courier", "pickup", "drone"];
const deliveryTimeOptions = ["morning", "afternoon", "evening"];
const restrictionOptions = ["vegan", "gluten-free", "nut-free"];

const OrderSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(2, "Занадто коротке")
    .max(50, "Занадто довге")
    .required("Обовязкове поле"),
  email: Yup.string().email("Невалідний емейл").required("Required"),
  delivery: Yup.string()
    .oneOf(deliveryOptions, "Оберіть метод доставки")
    .required("Required"),
  restrictions: Yup.array()
    .of(Yup.string().oneOf(restrictionOptions))
    .default([]),
  deliveryTime: Yup.string()
    .oneOf(deliveryTimeOptions, "Оберіть час")
    .required("Required"),
  message: Yup.string()
    .trim()
    .max(250, "Повідомлення не може перевищувати 250 символів"),
});

type DeliveryType = "courier" | "pickup" | "drone";

interface OrderFormValues {
  username: string;
  email: string;
  delivery: DeliveryType;
  restrictions: string[];
  deliveryTime: "morning" | "afternoon" | "evening";
  message: string;
}

const initialValues: OrderFormValues = {
  username: "test user",
  email: "",
  delivery: "pickup",
  restrictions: [],
  deliveryTime: "morning",
  message: "Hello message",
};

export default function OrderForm() {
  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>
  ) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={OrderSchema}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client Info</legend>
          <label className={css.label}>Name | </label>
          <Field type="text" name="username" className={css.input} />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />

          <label className={css.label}>Email | </label>
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage name="email" component="span" className={css.error} />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Delivery method</legend>

          <ErrorMessage
            name="delivery"
            component="span"
            className={css.error}
          />

          <label className={css.option}>
            <Field type="radio" name="delivery" value="pickup" />
            Pickup
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="courier" />
            Courier
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="drone" />
            Drone delivery
          </label>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Dietary restrictions</legend>

          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="vegan" />
            Vegan
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="gluten-free" />
            Gluten-free
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="nut-free" />
            Nut-free
          </label>
        </fieldset>

        <label className={css.label}>
          Preferred delivery time |{" "}
          <ErrorMessage
            name="deliveryTime"
            component="span"
            className={css.error}
          />
        </label>
        <Field name="deliveryTime" className={css.input} as="select">
          <option value="" disabled>
            -- Choose delivery time --
          </option>
          <option value="morning">Morning (8:00-12:00)</option>
          <option value="afternoon">Afternoon (12:00-16:00)</option>
          <option value="evening">Evening (16:00-20:00)</option>
        </Field>

        <label className={css.label}>
          Additional message |
          <ErrorMessage name="message" component="span" className={css.error} />
        </label>
        <Field
          as="textarea"
          name="message"
          rows={4}
          className={css.textarea}
        ></Field>

        <button type="submit" className={css.button}>
          Place order
        </button>
      </Form>
    </Formik>
  );
}
