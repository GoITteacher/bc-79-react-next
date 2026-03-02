/**
 * Прості типи в TypeScript описують значення без внутрішньої структури.
 *
 * Структура заняття:
 * 1) Коротко про цінність явної типізації.
 * 2) Демонстрація: any, number, string, boolean, null, undefined.
 * 3) Інференція типів: як TS сам розуміє типи змінних.
 */
//!======================================================
// any vs конкретні примітиви: any вимикає перевірки;
// number/string/boolean/undefined/null дають передбачуваність і підказки.

// const isAdmin: boolean = true;
// const userName: string = "Vasya";
// const userAge: number = 15;
// const props: null = null;

// let x: any = 20;
// x = "Hello";
// x = true;

//!======================================================
// інференція: TS виводить тип з присвоєння (const x = 10 => number), але явна анотація потрібна, коли інференція двозначна.

// const x = 10;
// const y = 25;

//!======================================================
// null/undefined: позначають відсутність значення; часто комбінують через union з основним типом.
// let username: string | null = null;
// username = 'Vasya';

//!======================================================

//!======================================================
/* 🧩 Task 1 — типи змінних
 * Додай явні примітивні типи замість unknown/any.
 */

export let userName: string = "Olena";
export const isOnline: boolean = true;
export let clicks: number = 0;
//!=========================================

/* 🧩 Task 2 — інференція
 * Дай TS самостійно вивести типи, а потім спробуй порушити типобезпеку.
 */
// export const basePrice = 100;
// export const totalPrice = basePrice + " UAH";

//!=========================================
/* 🧩 Task 3 — union для відсутності значення
 * Обмеж те, що може бути null чи undefined, без any.
 */
// export let optionalScore: number | null = null;
// export let promoCode: string | undefined = undefined;
