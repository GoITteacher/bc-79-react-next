/**
 * Типізація функцій: параметри, тип результату, void, опціональні параметри та значення за замовчуванням.
 *
 * План блоку:
 * 1) Сигнатури функцій: параметри та повернення.
 * 2) void і never — коли застосовувати.
 * 3) Опціональні параметри та дефолти в сигнатурі.
 * 4) Стрілкові функції vs декларації: як описувати типи.
 *
 */
//!======================================================
// сигнатури: задаємо типи параметрів і повернення; TS виводить їх з тіла, але явна анотація робить контракт явним.

// const x = 25;

// function foo(x: number, y: number):string {
//   return String(x + y);
// }

// foo(25, 20);

//!=========================================

// function foo(x: string | number, y: string | number) {
//   if (typeof x === "string" && typeof y === "string") {
//     return x + y;
//   }

//   if (typeof x === "number" && typeof y === "number") {
//     return x + y;
//   }

//   return 0;
// }
//!======================================================
// void/never: void для "нічого не повертає", never для "не завершується" (кидає помилку або нескінченний цикл).

// function sendErrorToSlack(error: string): never {
//   console.log(error);
//   throw new Error(error);
// }

// sendErrorToSlack("Test error");
//!======================================================
// optional/дефолти: параметр? або значення за замовчуванням у сигнатурі; перевіряти на undefined усередині.

// function foo(x: number, y?: number) {}
// foo(10, 20);
// foo(10);

function foo(x: number | string) {
  if (typeof x === "number") {
    return x.toFixed();
  } else {
    return x.toUpperCase();
  }
}

//!=========================================

// const myArrowFn = (x: number, y: string): void => {};

// interface Store{
//   username: string;
//   userAge: number;
//   setUserInfo: (x:number,y:number)=>string;
// }

//!======================================================

// type MyNumFn = (x1: number, x2: number) => number;

// const foo1: MyNumFn = (x1, x2) => x1 + x2;
// const foo2: MyNumFn = (x1, x2) => x1 * x2;
// const foo3: MyNumFn = (x1, x2) => x1 - x2;
// const foo4: MyNumFn = (x1, x2) => x1 / x2;

//!======================================================
/* 🧩 Task 1 — типізація аргументів
 * Додай точні типи замість any/unknown.
 */
// export function add(a: number, b: number) {
//   return a + b;
// }

// console.log(add(10, 20));
// console.log(add("Hello", "World"));

//!=========================================
/* 🧩 Task 2 — void функція
 * Опиши логер так, щоб він нічого не повертав і приймав рядок.
 */
export const logMessage = (message: string): void => {
  console.log("[LOG]", message);
};

logMessage("Hello");
//!=========================================

/* 🧩 Task 3 — optional параметр
 * Типізуй title як опціональний, а role — літерально.
 */
// type UserRole = "Admin" | "Student" | "Teacher";

// export function createUser(
//   name: string,
//   role: UserRole,
//   title: string,
//   isAdmin: boolean,
// ) {
//   return {
//     name,
//     role,
//     title: title ?? "Mr/Ms",
//     isAdmin: false ?? true
//   };
// }
// const res = createUser("Vasya", "Teacher", 'hello', false);

// console.log(res);

//!=========================================

//!=========================================

/* 🧩 Task 4 — never
 * Додай тип never для функції, що завжди кидає помилку.
 */
export function fail(message: string): never {
  throw new Error(message);
}

//!=========================================
// interface Car {}

// function carTemplate(car) {
//   return ``;
// }

//!=========================================

type Priority = "low" | "medium" | "high";

interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: true;
  priority: Priority;
  dueDate: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface TodoResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  todos: Todo[];
}
//!=========================================
interface FetchTodoParams {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: string;
  completed?: boolean;
  priority?: Priority;
  category?: string;
  title?: string;
  tag?: string;
  dueBefore?: string;
  dueAfter?: string;
}

function fetchTodoList(params: FetchTodoParams) {}

fetchTodoList({ page: 10 });
//!=========================================

/* 
{
  "page": 0,
  "perPage": 0,
  "totalPages": 0,
  "totalItems": 0,
  "hasNextPage": true,
  "hasPreviousPage": true,
  "todos": [
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "completed": true,
      "priority": "low",
      "dueDate": "2026-03-02T10:02:07.073Z",
      "category": "string",
      "tags": [
        "string"
      ],
      "createdAt": "2026-03-02T10:02:07.073Z",
      "updatedAt": "2026-03-02T10:02:07.073Z"
    }
  ]
}
*/
