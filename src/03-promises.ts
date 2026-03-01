/**
 * Типізація промісів і async/await.
 *
 * План:
 * - Основи Promise<T> і тип результату.
 * - Обробка помилок: reject, try/catch, Promise.reject.
 * - async/await: інференція типів, повернення промісів.
 * - Паралельні запити: Promise.all / Promise.allSettled.
 * - Завдання: переписати функції з any/unknown на точні типи.
 */
//!======================================================
// Promise<T>: типізуємо значення, яке буде доступне в then/await, уникаємо any.
//!======================================================
// Помилки: відловлюємо через catch/try-catch, бажано типізувати помилки (unknown) і звужувати.
//!======================================================
// async/await: async-функція завжди повертає Promise; тип результату виводиться з return.
//!======================================================
/* 🧩 Task 1 — базовий проміс
 * Типізуй повідомлення, яке резолвиться через setTimeout.
 */
export const getMessage = (): any => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello!"), 500);
  });
};

/* 🧩 Task 2 — отримання користувача
 * Опиши тип користувача й поверни Promise з цим типом замість unknown.
 */
export const getUser = (): Promise<unknown> => {
  return new Promise((resolve) => {
    resolve({ id: 1, name: "Alice" });
  });
};

/* 🧩 Task 3 — список користувачів
 * Зроби масив типізованим і додай обмеження на поля.
 */
export const getUsers = async (): Promise<any> => {
  return [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
};

/* 🧩 Task 4 — обробка помилки
 * Типізуй помилку як unknown, звузь усередині catch.
 */
export const safeParse = async (json: string): Promise<any> => {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error("Parse error", error);
    throw error;
  }
};

/* 🧩 Task 5 — паралельні запити
 * Типізуй Promise.all так, щоб результати мали підказки без кастів.
 */
export async function loadData(
  userPromise: Promise<any>,
  postsPromise: Promise<any>
): Promise<any> {
  const [user, posts] = await Promise.all([userPromise, postsPromise]);
  return { user, posts };
}
