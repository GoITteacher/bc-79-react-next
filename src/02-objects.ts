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

// interface User {
//   username: string;
//   age: number;
// }

// const user: User = {
//   username: "Vasya",
//   age: 25,
//   city: "Dnipro",
// };

//!======================================================
// optional та readonly: поле з ? може бути відсутнє; readonly захищає значення після створення (ідентифікатори, константні властивості).

// interface User {
//   readonly id: string;
//   firstname: string;
//   lastname: string;
//   age?: number;
//   phoneNumber?: string;
// }

// const user1: User = {
//   firstname: "Vasya",
//   lastname: "Klopotenko",
//   age: 25,
// };

// const user2: User = {
//   firstname: "Vasya",
//   lastname: "Klopotenko",
//   age: 25,
//   phoneNumber: "+38099123123",
// };

//!======================================================
// вкладені об'єкти: описуйте вкладені структури окремими типами (наприклад, Address, Metadata) і використовуйте їх усередині більших сутностей.

// interface Address {
//   city: string;
//   country: string;
// }

// interface User {
//   firstname: string;
//   lastname: string;
//   address: Address;
// }

// const user: User = {
//   firstname: "vasya",
//   lastname: "klopotenko",
//   address: {
//     city: "Dnipro",
//     country: "Ukraine",
//   },
// };
//!======================================================
// завдання: створити тип користувача з address і roles, де id readonly, email опційний, а roles — масив літералів.
//!======================================================

//!======================================================
/* 🧩 Task 1 — interface
 * Опиши адресу та користувача з опціональним email і readonly id.
 * Зараз усе типізовано як unknown/any — заміни на точні типи.
 */
// export interface Address {
//   city: string;
//   street: string;
//   apartment?: number | string;
// }

// export interface User {
//   readonly id: number;
//   name: string;
//   email?: string;
//   address: Address;
//   roles: any;
// }

// export const vasyl: User = {
//   id: 1,
//   name: "Vasyl",
//   roles: ["student"],
//   address: {
//     city: "Lviv",
//     street: "Shevchenka 10",
//     apartment: 410,
//   },
// };

// console.log(vasyl);

//!=========================================

/* 🧩 Task 2 — type + об'єднання
 * Опиши контакт і співробітника, додай літеральні ролі та позиції.
 * Поки що position і contact мають нечіткі типи.
 */
// export type Contact = {
//   phone?: unknown;
//   telegram?: unknown;
// };

// export type Employee = User & {
//   position: any;
//   isActive: unknown;
//   contact?: Contact;
// };

// export const olena: Employee = {
//   id: 2,
//   name: "Olena",
//   email: "olena@example.com",
//   roles: ["teacher", "admin"],
//   position: "mentor",
//   isActive: true,
//   address: {
//     city: "Kyiv",
//     street: "Khreshchatyk 1",
//   },
//   contact: {
//     phone: "+380991234567",
//   },
// };

/* 🧩 Task 3 — опціональні поля
 * Типізуй функцію так, щоб доступ до contact.phone не вимагав кастів.
 */
// export function printContact(user) {
//   const contact = user.contact?.phone ?? "no phone";
//   console.log(`${user.name}: ${contact}`);
// }
