import css from "./Form.module.css";

export default function TravelQuoteForm() {
  return (
    <form className={css.form}>
      <h2>Запит на подорож</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Клієнт</legend>
        <label className={css.label} htmlFor="travel-name">
          Повне ім’я
        </label>
        <input
          id="travel-name"
          name="name"
          type="text"
          className={css.input}
          placeholder="Ім’я Прізвище"
        />

        <label className={css.label} htmlFor="travel-email">
          Email
        </label>
        <input
          id="travel-email"
          name="email"
          type="email"
          className={css.input}
          placeholder="name@email.com"
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Маршрут</legend>
        <label className={css.label} htmlFor="destination">
          Напрямок / місто
        </label>
        <input
          id="destination"
          name="destination"
          type="text"
          className={css.input}
          placeholder="Напр., Барселона"
        />

        <label className={css.label} htmlFor="start-date">
          Дата старту
        </label>

        <input id="start-date" name="start" type="date" className={css.input} />

        <label className={css.label} htmlFor="end-date">
          Дата повернення
        </label>

        <input id="end-date" name="end" type="date" className={css.input} />

        <label className={css.label} htmlFor="travelers">
          Кількість мандрівників
        </label>
        <input
          id="travelers"
          name="travelers"
          type="number"
          min="1"
          className={css.input}
          placeholder="2"
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Побажання</legend>
        <label className={css.label} htmlFor="budget">
          Бюджет
        </label>
        <select id="budget" name="budget" className={css.input} defaultValue="">
          <option value="" disabled>
            Обери діапазон
          </option>
          <option value="economy">Економ</option>
          <option value="comfort">Комфорт</option>
          <option value="lux">Lux</option>
        </select>

        <label className={css.label} htmlFor="travel-notes">
          Коментарі
        </label>
        <textarea
          id="travel-notes"
          name="notes"
          rows={4}
          className={css.textarea}
          placeholder="Стиль подорожі, готелі, активності"
        ></textarea>
      </fieldset>

      <button type="submit" className={css.button}>
        Отримати пропозицію
      </button>
    </form>
  );
}
