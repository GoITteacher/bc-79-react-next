/**
 * Типізація об'єктів: interface та type, опціональні й readonly поля, вкладені структури.
 *
 * План уроку:
 * - Розбір різниці між interface та type (коли що використовувати).
 * - Приклади опціональних полів та readonly для захисту структури.
 * - Вкладені об'єкти: як задавати типи для address, metadata тощо.
 * - Коротке завдання: описати користувача з адресою і ролями.
 */
//!======================================================
// interface vs type: interface для форм об'єктів і підтримує declaration merging; type універсальний (об'єкти, union, intersection), але не мерджиться.
//!======================================================
// optional та readonly: поле з ? може бути відсутнє; readonly захищає значення після створення (ідентифікатори, константні властивості).
//!======================================================
// вкладені об'єкти: описуйте вкладені структури окремими типами (наприклад, Address, Metadata) і використовуйте їх усередині більших сутностей.
//!======================================================
// завдання: створити тип користувача з address і roles, де id readonly, email опційний, а roles — масив літералів.
//!======================================================

//!======================================================
/* 🧩 Task 1 — interface
 * Опиши адресу та користувача з опціональним email і readonly id.
 * Зараз усе типізовано як unknown/any — заміни на точні типи.
 */
export interface Address {
  city: unknown;
  street: unknown;
  apartment?: unknown;
}

export interface User {
  id: any;
  name: any;
  email?: any;
  address: any;
  roles: any;
}

export const vasyl: unknown = {
  id: 1,
  name: "Vasyl",
  roles: ["student"],
  address: {
    city: "Lviv",
    street: "Shevchenka 10",
  },
};

/* 🧩 Task 2 — type + об'єднання
 * Опиши контакт і співробітника, додай літеральні ролі та позиції.
 * Поки що position і contact мають нечіткі типи.
 */
export type Contact = {
  phone?: unknown;
  telegram?: unknown;
};

export type Employee = User & {
  position: any;
  isActive: unknown;
  contact?: Contact;
};

export const olena: Employee = {
  id: 2,
  name: "Olena",
  email: "olena@example.com",
  roles: ["teacher", "admin"],
  position: "mentor",
  isActive: true,
  address: {
    city: "Kyiv",
    street: "Khreshchatyk 1",
  },
  contact: {
    phone: "+380991234567",
  },
};

/* 🧩 Task 3 — опціональні поля
 * Типізуй функцію так, щоб доступ до contact.phone не вимагав кастів.
 */
export function printContact(user) {
  const contact = user.contact?.phone ?? "no phone";
  console.log(`${user.name}: ${contact}`);
}
