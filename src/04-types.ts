/**
 * Власні типи: об'єднання (union), літеральні типи, перевірки типів (type guards).
 *
 * Що показати:
 * - Приклади union: number | string для ідентифікаторів.
 * - Літеральні типи: фіксовані статуси чи ролі.
 * - Type guards: перевірка typeof/символи in для звуження типу.
 *
 */
//!======================================================
// union: дозволяє кілька варіантів типу (number | string) без any.
//!======================================================
// літеральні типи: обмежують значення до конкретних рядків/чисел, зручно для статусів/ролей.
//!======================================================
// type guards: перевірка typeof/Array.isArray/"prop" in звужує union до конкретного варіанта.
//!======================================================


//!======================================================
/* 🧩 Task 1 — ідентифікатор
 * Заміни any на union number|string і відформатуй для обох випадків.
 */
export type Identifier = any;
export const formatId = (id: Identifier) => {
  return typeof id === "number" ? `#${id}` : id.toUpperCase();
};

/* 🧩 Task 2 — статуси замовлення
 * Опиши літеральні статуси, щоб заборонити довільні рядки.
 */
export type OrderStatus = string;
export const nextStatus = (status: OrderStatus): OrderStatus => {
  if (status === "pending") return "shipped";
  return "done";
};

/* 🧩 Task 3 — type guard
 * Додай звуження типу для різних форм payload.
 */
export type Payload = { type: "text"; value: string } | { type: "count"; value: number };
export function handlePayload(payload: any) {
  if (payload.type === "text") {
    return payload.value.trim();
  }
  return payload.value + 1;
}
