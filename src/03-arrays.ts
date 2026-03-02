/**
 * Типізація масивів: number[] чи Array<number>, підказки методів, масиви об'єктів і кортежі.
 *
 * Структура пояснення:
 * 1) Два синтаксиси типів масивів і коли який читабельніший.
 * 2) Як TS знає тип елементів у map/filter/find.
 * 3) Масиви об'єктів: окремий інтерфейс + список.
 * 4) Кортежі: фіксована кількість елементів різних типів.
 * 5) Міні-практика: типізувати список курсів та кортеж налаштувань.
 *
 */
//!======================================================
// синтаксис: number[] і Array<number> рівноцінні; обирайте читабельний для команди.

// const arr: number[] = [10, 20, 30, 40];
// console.log(arr);

// const friends: Array<string> = [];

// friends.push("Vasya");
// friends.push("Kolya");
// friends.push(25);
//!=========================================
// interface Student {
//   username: string;
//   age: number;
//   group: string;
//   friends: string[];
// }

// interface Teacher {
//   username: string;
//   age: number;
//   salary: number;
// }

// const users: (Student | Teacher)[] = [];
//
// users.push({ username: "Vasya", age: 25, group: 'PZ' });

//!======================================================
// методи масивів: map/filter/find знають тип елементів і підказують параметри колбеків.

// interface Student {
//   username: string;
//   age: number;
//   group: string;
//   friends: string[];
// }

// function showStudent(student: Student) {
//   console.log(student.username);
//   console.log(student.age);
//   console.log(student.group);
//   student.friends.map()
// }

// interface Teacher {
//   username: string;
//   age: number;
//   salary: number;
// }

// const users: (Student | Teacher)[] = [];

// users.map((el) => {});
// users.map((el) => el.age);

// const teachers: Teacher[] = [];

// teachers.filter((teacher) => teacher.salary > 1000);

// for (const teacher of teachers) {
//   console.log(teacher.username);
// }

//!======================================================
// масиви об'єктів: краще описати окремий тип елемента й використовувати його для списку.
//!======================================================
// кортежі: фіксована кількість елементів різних типів, наприклад [string, number].

// const rgb: [number, number, number] = [10, 20, 30];

//!======================================================
/* 🧩 Task 1 — масив чисел
 * Заміни unknown на коректний тип масиву та виправ push/map.
 */
export const points: number[] = [10, 20, 30];
// points.push("forty");
// const doubled = points.map(p => p * 2);
//!=========================================

/* 🧩 Task 2 — масив об'єктів
 * Типізуй список курсів, щоб title і lessons були підказуваними.
 */

// interface Course {
//   title: string;
//   lessons: number;
// }

// export const courses: Course[] = [
//   { title: "TS Basics", lessons: 12 },
//   { title: "React", lessons: 18 },
// ];

// const titles: string[] = courses.map((c) => c.title.toUpperCase());

/* 🧩 Task 3 — кортеж налаштувань
 * Опиши фіксований набір значень: назва, лічильник, активність.
 */

// type Settings = [string, number, boolean];

// export const settings: Settings = ["autosave", 3, true];
// export const settings1: Settings = ["autosave", 3, true];
// export const settings2: Settings = ["autosave", 3, true];
