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

type Username = string | null;
type PhoneNumber = string | null;

//!======================================================
// літеральні типи: обмежують значення до конкретних рядків/чисел, зручно для статусів/ролей.

// type DeliveryStatus = "in-process" | "delivered" | "canceled";
// const status: DeliveryStatus = "in-process";

type InsertPosition = "beforeend" | "beforebegin" | "afterend" | "afterbegin";

//!======================================================
// type guards: перевірка typeof/Array.isArray/"prop" in звужує union до конкретного варіанта.

const x: string | number = "Hello";

//!======================================================

//!======================================================
/* 🧩 Task 1 — ідентифікатор
 * Заміни any на union number|string і відформатуй для обох випадків.
 */
// export type Identifier = string | number;

// export const formatId = (id: Identifier) => {
//   const isNumber = typeof id === "number";

//   if (isNumber) {
//     return `#${id}`;
//   } else {
//     return id.toUpperCase();
//   }
// };

/* 🧩 Task 2 — статуси замовлення
 * Опиши літеральні статуси, щоб заборонити довільні рядки.
 */
export type OrderStatus = "pending" | "shipped" | "done";

export const nextStatus = (status: OrderStatus): OrderStatus => {
  if (status === "pending") return "shipped";
  return "done";
};

/* 🧩 Task 3 — type guard
 * Додай звуження типу для різних форм payload.
 */

interface PayloadStr {
  type: "text";
  value: string;
}
interface PayloadNum {
  type: "count";
  value: number;
}

export type Payload = PayloadStr | PayloadNum;

export function handlePayload(payload: Payload) {
  if (payload.type === "text") {
    return payload.value.trim();
  } else {
    return payload.value + 1;
  }
}
