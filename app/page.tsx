import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header>
        <h1>Вступна теорія про Next.js для швидкого старту</h1>
        <p>
          Зрозумійте, як працює фреймворк: маршрутизація, рендеринг, компоненти
          та базові принципи створення сучасних React-застосунків.
        </p>
        <div>
          <button type="button">Почати навчання</button>
          <button type="button">Переглянути приклади</button>
        </div>
      </header>

      <section className={styles.howNext}>
        <h2>Як влаштований Next.js</h2>
        <ol>
          <li>Проєкт будується на React, але має власну структуру.</li>
          <li>Маршрути формуються з файлової системи.</li>
          <li>Рендеринг обирається під задачу: SSR, SSG або CSR.</li>
        </ol>
      </section>

      <section>
        <h2>Ключові теми</h2>
        <div>
          <article>
            <h3>Файлова маршрутизація</h3>
            <p>Сторінки та сегменти визначаються структурою папок.</p>
          </article>
          <article>
            <h3>Рендеринг і кеш</h3>
            <p>Пояснення SSR, SSG, ISR та клієнтського рендерингу.</p>
          </article>
          <article>
            <h3>Дані і запити</h3>
            <p>Основи роботи з API, серверними діями та обробкою форм.</p>
          </article>
        </div>
      </section>

      <section className={styles.whyNext}>
        <h2>Чому Next.js</h2>
        <ul>
          <li>Швидкі сторінки завдяки гібридному рендерингу.</li>
          <li>Проста масштабована структура для команд.</li>
          <li>Оптимізації продуктивності з коробки.</li>
          <li>Можливість розгортання на Vercel або будь-якому хостингу.</li>
        </ul>
      </section>

      <section>
        <h2>Навчальні блоки</h2>
        <div>
          <article>
            <h3>Основи</h3>
            <img
              src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
              alt=""
            />
            <p>Структура застосунку, App Router, layout та page.</p>
            <p>Тривалість: 2 год</p>
            <button type="button">Почати</button>
          </article>
          <article>
            <h3>Рендеринг</h3>
            <img
              src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
              alt=""
            />
            <p>SSR, SSG, ISR, оптимізація даних і кеш.</p>
            <p>Тривалість: 3 год</p>
            <button type="button">Продовжити</button>
          </article>
          <article>
            <h3>Практика</h3>
            <img
              src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
              alt=""
            />
            <p>Створення лендінгу, форм та інтеграцій API.</p>
            <p>Тривалість: 4 год</p>
            <button type="button">Перейти</button>
          </article>
        </div>
      </section>

      <section>
        <h2>Отримати матеріали</h2>
        <p>Надішліть заявку і ми поділимось підбіркою гайдів та шаблонів.</p>
        <form>
          <label>
            Імʼя
            <input type="text" name="name" placeholder="Олена" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@email.com" />
          </label>
          <label>
            Тема
            <textarea
              name="message"
              rows={4}
              placeholder="Що хочете розібрати в Next.js?"
            />
          </label>
          <button type="submit">Отримати гайд</button>
        </form>
      </section>

      <section>
        <h2>Питання та відповіді</h2>
        <details>
          <summary>Чим Next.js відрізняється від чистого React?</summary>
          <p>
            Next.js додає маршрутизацію, рендеринг на сервері та оптимізації.
          </p>
        </details>
        <details>
          <summary>Чи обов’язково використовувати TypeScript?</summary>
          <p>Ні, але він покращує якість коду та підказки редактора.</p>
        </details>
        <details>
          <summary>Де розгортати застосунок?</summary>
          <p>Найпростіше — Vercel, але підійде будь-який Node-хостинг.</p>
        </details>
      </section>

      <section>
        <h2>Готові зануритись у Next.js?</h2>
        <p>Почніть з теорії та одразу переходьте до практичних прикладів.</p>
        <button type="button">До першого уроку</button>
      </section>
    </main>
  );
}
