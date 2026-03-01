import css from "./OrderForm.module.css";

export default function OrderForm() {
  return (
    <form className={css.form}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client Info</legend>
        <label className={css.label}>Name</label>
        <input type="text" name="username" className={css.input} />

        <label className={css.label}>Email</label>
        <input type="email" name="email" className={css.input} />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method</legend>

        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" />
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

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Dietary restrictions</legend>

        <label className={css.option}>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label className={css.option}>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label className={css.option}>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>

      <label className={css.label}>Preferred delivery time</label>
      <select name="deliveryTime" className={css.input}>
        <option value="" disabled>
          -- Choose delivery time --
        </option>
        <option value="morning">Morning (8:00-12:00)</option>
        <option value="afternoon">Afternoon (12:00-16:00)</option>
        <option value="evening">Evening (16:00-20:00)</option>
      </select>

      <label className={css.label}>Additional message</label>
      <textarea name="message" rows={4} className={css.textarea}></textarea>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
