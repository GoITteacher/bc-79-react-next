/**
 * Узагальнені типи (generics)
 *
 * План:
 * - Навіщо generics: повторне використання з різними типами.
 * - Параметри типів <T>, кілька параметрів <T, U>.
 * - Обмеження (extends) для властивостей/методів.
 * - Інференція типів для generic-функцій і колбеків.
 * - Завдання: переписати функції з any/unknown на generics з обмеженнями.
 */
//!======================================================
// generics дозволяють писати одну функцію для різних типів без any, зберігаючи підказки.
//!======================================================
// обмеження: <T extends { id: number }> гарантує наявність id; зручно для фільтрів і пошуку.
//!======================================================
// інференція: TS часто виводить T із аргументів, тож явний <T> потрібен лише інколи.
//!======================================================
/* 🧩 Task 1 — перший елемент
 * Заміни any/unknown на generics і додай обмеження, якщо треба.
 */
export function getFirstElement(arr: any[]): any {
  return arr[0];
}

/* 🧩 Task 2 — перемішування
 * Типізуй shuffle так, щоб зберігався тип елементів без any.
 */
export function shuffle(array: unknown[]): unknown[] {
  return array.sort(() => Math.random() - 0.5);
}

/* 🧩 Task 3 — сховище
 * Використай generics для збереження/завантаження без кастів.
 */
export function saveToStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromStorage(key: string): unknown {
  const item = localStorage.getItem(key);
  if (item !== null) {
    return JSON.parse(item);
  }
  return null;
}

/* 🧩 Task 4 — max за селектором
 * Додай generics та обмеження для selector, щоб не втратити тип елемента.
 */
export function max(array: any[], selector: (item: any) => number): any {
  return array.reduce((prev, curr) =>
    selector(curr) > selector(prev) ? curr : prev
  );
}
