
/**
 * Файл із практичними задачами на типізацію.
 * ⚙️ Правила:
 *  - Усі приклади перемішані в довільному порядку.
 *  - Для кожної теми з попередніх файлів є декілька задач.
 *  - Замінюй `unknown`, уточнюй сигнатури та типи так, щоб прибрати потребу в приведеннях.
 *  - Не використовуй `any` — шукай максимально точні типи.
 *  - Виконуй задачі поступово та перевіряй, що TypeScript не сигналізує про помилки.
 */

/* 🧩 Challenge 01 — Functions
 * Додай точні типи до параметрів та результату. Після типізації прибери зайві приведення.
 */
export const calculateScore = (points, bonusMultiplier) => {
  return points * bonusMultiplier;
};

/* 🧩 Challenge 02 — Objects
 * Опиши тип для знімку сесії з вкладеним об'єктом `metadata`.
 * Переконайся, що `roles` — це масив літеральних значень, а не просто `string[]`.
 */

export const sessionSnapshot: unknown = {
  userId: 501,
  token: "abc123",
  expiresAt: new Date(),
  metadata: {
    ip: "127.0.0.1",
    roles: ["admin", "editor"],
  },
};

/* 🧩 Challenge 03 — Primitives
 * Задай правильний примітивний тип без використання бридкого `any`.
 */
export const currencyCode: unknown = "UAH";

/* 🧩 Challenge 04 — Types
 * Опиши літерально-об'єднувальний тип стани завантаження.
 */
export type LoadingState = string;

/* 🧩 Challenge 05 — Arrays
 * Перетвори тип на масив чисел. Подумай, чи потрібна незмінність (`readonly`).
 */
export const temperatureHistory: unknown = [18.6, 17.4, 19.1, 20];

/* 🧩 Challenge 06 — Functions
 * Типізуй аргументи та результат. Продумай, які значення може приймати `locale`.
 */
export const formatUserName = (
  firstName,
  lastName,
  locale
) => {
  const fullName = `${String(firstName)} ${String(lastName)}`.trim();
  return locale === "ua" ? `Привіт, ${fullName}` : `Hello, ${fullName}`;
};

/* 🧩 Challenge 07 — Primitives
 * Використай числовий тип, який відповідає обмеженням на кількість запитів.
 */
export const maxDailyRequests: unknown = 1000;

/* 🧩 Challenge 08 — Objects
 * Типізуй налаштування фіч-тогла. Додай `readonly`, де це має сенс.
 */

export const featureToggle: unknown = {
  key: "beta-layout",
  enabled: true,
  rolloutPercentage: 0.4,
  lastUpdatedBy: {
    id: 7,
    name: "TeamLead",
  },
};

/* 🧩 Challenge 10 — Arrays
 * Опиши матрицю оцінок. Краще явно вказати розмір вкладених масивів.
 */
export const ratingMatrix: unknown = [
  [4, 5, 3],
  [5, 5, 5],
  [3, 4, 4],
];

/* 🧩 Challenge 11 — Functions
 * Типізуй виклик із повторними спробами. Подумай про значення, яке повертає `operation`.
 * Після уточнення типів прибери приведення `as`.
 */
export const invokeWithRetry = (
  operation: unknown,
  retries?: unknown,
  delay?: unknown
) => {
  const maxAttempts = (retries as number) ?? 0;
  let lastError: unknown = null;

  for (let attempt = 0; attempt <= maxAttempts; attempt += 1) {
    try {
      return (operation as () => unknown)();
    } catch (error) {
      lastError = error;

      if (attempt < maxAttempts && typeof delay === "function") {
        (delay as (attempt: number) => void)(attempt);
      }
    }
  }

  throw lastError;
};

/* 🧩 Challenge 12 — Primitives
 * Обери тип, який відображає символ — одиничний символ або будь-який рядок?
 * Використай той, що відповідає вашим вимогам.
 */
export const initialLetter: unknown = "T";

/* 🧩 Challenge 13 — Objects
 * Тип для фільтрів звіту. Створи окрему структуру для періоду та масиву статусів.
 */
export const reportFilters: unknown = {
  period: {
    from: new Date("2024-01-01"),
    to: new Date("2024-06-30"),
  },
  includeInactive: false,
  statuses: ["pending", "approved"],
};

/* 🧩 Challenge 14 — Arrays
 * Опиши чергу задач із різними станами. Можна використати об'єднання кількох типів.
 */
export const backlogQueue: unknown = [
  { id: "PLN-1", blocked: false, assignee: "Oleh" },
  { id: "BUG-14", blocked: true, assignee: null },
  { id: "DOC-3", blocked: false, assignee: "Iryna" },
];

/* 🧩 Challenge 15 — Types
 * Додай часові мітки до будь-якого типу. Не забудь про змінюваність полів.
 */
export type WithTimestamp<TEntity> = unknown;

/* 🧩 Challenge 16 — Functions
 * Фабрика логерів. Типізуй `makePrefix`, методи та повідомлення.
 */
export const createLogger = (makePrefix: unknown) => {
  return {
    info(message: unknown) {
      console.log(`${(makePrefix as () => string)()} ${String(message)}`);
    },
    error(message: unknown) {
      console.error(`${(makePrefix as () => string)()} ${String(message)}`);
    },
  };
};

/* 🧩 Challenge 17 — Primitives
 * Тип для прапорця доступу гостей. Виріши, чи має бути можливість `undefined`.
 */
export let allowGuests: unknown = false;

/* 🧩 Challenge 18 — Objects
 * Типізація чернетки інвойсу: додай строгі типи для `items`, `currency` та `paid`.
 */
export const draftInvoice: unknown = {
  invoiceId: "INV-9001",
  customer: {
    name: "Acme Corp",
    taxId: "UA1234567890",
  },
  items: [
    { sku: "TS-45", quantity: 3, price: 780 },
    { sku: "SUP-12", quantity: 1, price: 2200 },
  ],
  currency: "UAH",
  paid: false,
};

/* 🧩 Challenge 19 — Arrays
 * Типізуй кортеж налаштувань: [назва, кількість спроб, активність].
 */
export const editableTuple: unknown = ["autosave", 3, true];

/* 🧩 Challenge 20 — Types
 * Опиши результат операції як об'єднання успіху або помилки.
 */
export type Result<Success, Failure> = unknown;
