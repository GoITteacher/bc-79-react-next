import { useId } from "react";
import css from "./OrderForm.module.css";

type DeliveryType = "pickup" | "courier" | "drone";

interface FormValues {
  username: string;
  email: string;
  balance: number;
  delivery: DeliveryType;
}

// function convertToNumber<T>(x: T): number {
//   return Number(x) * 1;
// }

// convertToNumber("25");
// convertToNumber("27");
// convertToNumber("29");

export default function OrderForm() {
  const id = useId();
  console.log(id);

  /* 
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values: FormValues = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      balance: Number(formData.get("balance")), // Number('25') - 25
      delivery: formData.get("delivery") as DeliveryType,
    };
    console.log(values);
    e.target.reset();
  }; 
  */

  const handleSubmit = (formData: FormData) => {
    const values: FormValues = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      balance: Number(formData.get("balance")), // Number('25') - 25
      delivery: formData.get("delivery") as DeliveryType,
    };
    console.log(values);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>
        <label className={css.label} htmlFor={`username:${id}`}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="username"
          id={`username:${id}`}
        />

        <label className={css.label} htmlFor={`email:${id}`}>
          Email
        </label>
        <input
          className={css.input}
          type="email"
          name="email"
          id={`email:${id}`}
        />

        <label className={css.label} htmlFor={`balance:${id}`}>
          Balance
        </label>
        <input
          className={css.input}
          type="number"
          name="balance"
          id={`balance:${id}`}
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
