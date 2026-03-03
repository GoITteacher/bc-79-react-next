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

// function getFirstElement<T1,T2>(x1:T1, x2:T2){
// }
// getFirstElement<number, number>(10,10)

// function getFirstElement<T = number>(arr: T[]): T {
//   const elem = arr[0];
//   return elem;
// }

// console.log(getFirstElement([10, 20, 30, 40, 50]));

// function foo(x1: number, x2: number) {
//   console.log(10, x1, x2);
// }

// foo(1, 10);
// foo(2, 20);
// foo(3, 30);
// foo(4, 40);

//!======================================================
// обмеження: <T extends { id: number }> гарантує наявність id; зручно для фільтрів і пошуку.

// function getId<T extends { id: string }>(obj: T) {
//   return obj.id;
// }

// console.log(
//   getId({ firstName: "Vasya", lastname: "Klopotenko", id: "awdawdawd" }),
// );
//!======================================================
// інференція: TS часто виводить T із аргументів, тож явний <T> потрібен лише інколи.

// function getFirstElement<T>(arr: T[]) {
//   return arr[0];
// }

// getFirstElement([10, 20, 30, 40]);
// getFirstElement(["10", "10", "10", "20"]);

// axios.get<User>()
// axios.get<ServerResponse>()
//!======================================================
/* 🧩 Task 1 — перший елемент
 * Заміни any/unknown на generics і додай обмеження, якщо треба.
 */

// export function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// console.log(getFirstElement<boolean>([true, false, true, false]));

/* 🧩 Task 2 — перемішування
 * Типізуй shuffle так, щоб зберігався тип елементів без any.
 */
// export function shuffle<T>(array: T[]): T[] {
//   return array.sort(() => Math.random() - 0.5);
// }

// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//!=========================================

//!=========================================

/* 🧩 Task 3 — сховище
 * Використай generics для збереження/завантаження без кастів.
 */
// export function saveToStorage(key: string, value: any) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// export function loadFromStorage(key: string): unknown {
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     return JSON.parse(item);
//   }
//   return null;
// }

/* 🧩 Task 4 — max за селектором
 * Додай generics та обмеження для selector, щоб не втратити тип елемента.
 */
// export function max(array: any[], selector: (item: any) => number): any {
//   return array.reduce((prev, curr) =>
//     selector(curr) > selector(prev) ? curr : prev
//   );
// }

// axios.get<user>();
