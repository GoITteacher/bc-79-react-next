/**
 * Перелічення (enum) та літеральні об'єднання.
 *
 * План:
 * - Коли обрати union замість enum, а коли enum корисний.
 * - Строкові vs числові enum-и, автонумерація.
 * - Підказки й захист від опечаток завдяки літералам.
 * - Завдання: оголосити статуси, коди відповіді та ролі користувача.
 */
//!======================================================
// union vs enum: union простіший і не генерує додатковий код; enum додає рантайм-об'єкт і зручний, коли потрібні посилання в JS-коді.

// type DeliveryStatus = "in-process" | "delivered" | "canceled";
// const status: DeliveryStatus = "delivered";

// enum DeliveryStatus {
//   IN_PROCESS, // 0
//   DELIVERED, // 1
//   CANCELED, // 2
// }

// const status: DeliveryStatus = DeliveryStatus.IN_PROCESS;

// console.log(DeliveryStatus.IN_PROCESS, DeliveryStatus[0]);
// console.log(DeliveryStatus.DELIVERED, DeliveryStatus[1]);

//!=========================================

// enum DeliveryProvider {
//   NovaPost = "Нова Пошта",
//   UkrPost = "Укр Пошта",
//   Rozetka = "Відділення Розетки",
// }

// console.log(Object.keys(DeliveryProvider));
// console.log(Object.values(DeliveryProvider));

// console.log(Object.keys(DeliveryStatus));

//!=========================================

// type PositiveStatusCode = 200 | 201 | 204;
// type NegativeStatusCode = 400 | 401 | 403 | 404 | 429 | 500;
// const serverResponse: NegativeStatusCode = 403;

// enum NegativeStatusCode {
//   ClientError = 400,
//   AuthError = 401,
//   NotAuth = 403,
//   NotFound = 404,
// }

// const serverResponse: NegativeStatusCode = NegativeStatusCode.NotFound;

// if (serverResponse === NegativeStatusCode.AuthError) {
//   console.log('Email ')
// }

//!======================================================
// string vs number enums: рядкові уникють зворотного мапінгу; числові можуть автонумерувати, але вимагають обережності.

// enum DeliveryProvider {
//   NovaPost = "Нова Пошта",
//   UkrPost = "Укр Пошта",
//   Rozetka = "Відділення Розетки",
// }

// console.log(DeliveryProvider.NovaPost);
// console.log(DeliveryProvider["Нова Пошта"]);

// enum NegativeStatusCode {
//   ClientError = 400,
//   AuthError = 401,
//   NotAuth = 403,
//   NotFound = 404,
// }

// console.log(NegativeStatusCode.ClientError);
// console.log(NegativeStatusCode[400]);

//!======================================================
// підказки: літеральні типи дають автокомпліт і перевірку значень; enum робить те саме, але через властивості об'єкта.
//!======================================================

// enum NegativeStatusCode {
//   ClientError = 400,
//   AuthError = 401,
//   NotAuth = 403,
//   NotFound = 404,
// }

// console.log(Object.values(NegativeStatusCode));

//!======================================================
/* 🧩 Task 1 — статуси запиту
 * Заміни any на літеральний union або enum зі значеннями pending/fulfilled/rejected.
 */

// type RequestStatus = "pending" | "fulfilled" | "rejected";
// export const requestStatus: RequestStatus = "pending";

/* 🧩 Task 2 — коди відповіді
 * Опиши або union чисел, або enum з кодами 200/201/400/500.
 * Зараз тип надто широкий.
 */

// enum RequestCode {
//   SUCCESS = 200,
//   CREATED = 201,
//   CLIENT_ERROR = 400,
//   SERVER_ERROR = 500,
// }

// export const requestCode: RequestCode = RequestCode.SUCCESS;

/* 🧩 Task 3 — ролі користувача
 * Створи ролі admin/user/guest через union чи enum.
 * Типізуй поле role у користувача.
 */

// export type Role = "admin" | "user" | "guest";

// export interface User {
//   username: string;
//   role: Role;
// }

// export const currentUser: User = {
//   username: "jacob",
//   role: "admin",
// };

// console.log(currentUser);
