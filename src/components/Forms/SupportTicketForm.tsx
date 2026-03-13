import css from "./Form.module.css";

export default function SupportTicketForm() {
  return (
    <form className={css.form}>
      <h2>Запит у підтримку</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Контакти</legend>
        <label className={css.label} htmlFor="support-name">
          Ім’я
        </label>
        <input
          id="support-name"
          name="name"
          type="text"
          className={css.input}
          placeholder="Ваше ім’я"
        />

        <label className={css.label} htmlFor="support-email">
          Email
        </label>
        <input
          id="support-email"
          name="email"
          type="email"
          className={css.input}
          placeholder="name@email.com"
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Деталі</legend>
        <label className={css.label} htmlFor="product">
          Продукт
        </label>
        <select
          id="product"
          name="product"
          className={css.input}
          defaultValue=""
        >
          <option value="" disabled>
            Обери продукт
          </option>
          <option value="web">Веб-додаток</option>
          <option value="mobile">Мобільний застосунок</option>
          <option value="api">API / інтеграція</option>
        </select>

        <label className={css.label} htmlFor="issue-type">
          Тип питання
        </label>
        <select
          id="issue-type"
          name="issue"
          className={css.input}
          defaultValue=""
        >
          <option value="" disabled>
            Обери тип
          </option>
          <option value="bug">Баг</option>
          <option value="billing">Оплата</option>
          <option value="feature">Feature request</option>
          <option value="other">Інше</option>
        </select>

        <p className={css.label}>Терміновість</p>
        <label className={css.option}>
          <input type="radio" name="urgency" value="low" />
          Низька
        </label>
        <label className={css.option}>
          <input type="radio" name="urgency" value="medium" />
          Середня
        </label>
        <label className={css.option}>
          <input type="radio" name="urgency" value="high" />
          Висока
        </label>
      </fieldset>

      <label className={css.label} htmlFor="support-message">
        Опис проблеми
      </label>
      <textarea
        id="support-message"
        name="message"
        rows={4}
        className={css.textarea}
        placeholder="Кроки відтворення, посилання, скриншоти"
      ></textarea>

      <button type="submit" className={css.button}>
        Надіслати запит
      </button>
    </form>
  );
}
