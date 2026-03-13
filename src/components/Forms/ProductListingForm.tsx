import css from "./Form.module.css";

export default function ProductListingForm() {
  return (
    <form className={css.form}>
      <h2>Оголошення про товар</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Основне</legend>
        <label className={css.label} htmlFor="product-title">
          Назва
        </label>
        <input
          id="product-title"
          name="title"
          type="text"
          className={css.input}
          placeholder="Напр., Ноутбук для дизайну"
        />

        <label className={css.label} htmlFor="product-brand">
          Марка
        </label>
        <input
          id="product-brand"
          name="brand"
          type="text"
          className={css.input}
          placeholder="Apple, Lenovo, Dell"
        />

        <label className={css.label} htmlFor="product-model">
          Модель
        </label>
        <input
          id="product-model"
          name="model"
          type="text"
          className={css.input}
          placeholder="MacBook Pro 14"
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Деталі</legend>
        <label className={css.label} htmlFor="product-price">
          Ціна (USD)
        </label>
        <input
          id="product-price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          className={css.input}
          placeholder="1200"
        />

        <label className={css.label} htmlFor="product-condition">
          Стан
        </label>
        <select
          id="product-condition"
          name="condition"
          className={css.input}
          defaultValue=""
        >
          <option value="" disabled>
            Обери стан
          </option>
          <option value="new">Новий</option>
          <option value="used-good">Б/в — стан відмінний</option>
          <option value="used-fair">Б/в — стан нормальний</option>
        </select>

        <label className={css.label} htmlFor="product-description">
          Опис
        </label>
        <textarea
          id="product-description"
          name="description"
          rows={4}
          className={css.textarea}
          placeholder="Комплектація, стан батареї, гарантія"
        ></textarea>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Контакти</legend>
        <label className={css.label} htmlFor="product-email">
          Email для зв'язку
        </label>
        <input
          id="product-email"
          name="email"
          type="email"
          className={css.input}
          placeholder="name@email.com"
        />

        <label className={css.label} htmlFor="product-city">
          Місто
        </label>
        <input
          id="product-city"
          name="city"
          type="text"
          className={css.input}
          placeholder="Київ"
        />
      </fieldset>

      <button type="submit" className={css.button}>
        Опублікувати
      </button>
    </form>
  );
}
