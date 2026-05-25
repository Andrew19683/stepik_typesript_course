let taskNumber: number = 1;
/*
Задание 1 — Типизация строк и чисел
Допишите функцию, которая форматирует цену в зависимости от валюты
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
function formatPrice(price: number, currency: string): string {
  // Если currency — "USD", верните "$" + price
  // Если currency — "EUR", верните "€" + price
  // Если currency — "RUB", верните price + " ₽"
  // Для остальных валют верните price + " " + currency

  switch (currency) {
    case "USD":
      return `\$${price}`;
    case "EUR":
      return `€${price}`;
    case "RUB":
      return `${price} ₽`;
    default:
      return `${price} ${currency}`;
  }
}

// Проверка:
console.log(formatPrice(99.99, "USD")); // $99.99
console.log(formatPrice(50, "EUR")); // €50
console.log(formatPrice(1000, "RUB")); // 1000 ₽
console.log(formatPrice(75, "GBP")); // 75 GBP

console.log("");
/* 
Задание 2 — Массивы чисел
Допишите функцию, которая находит максимальное число в массиве
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
function findMax(numbers: number[]): number | null {
  // Если массив пустой, верните null
  // Иначе верните максимальное число

  if (numbers.length === 0) {
    return null;
  }

  return Math.max(...numbers);
}

// Проверка:
console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-10, -5, -1])); // -1
console.log(findMax([])); // null

console.log("");
/*
Задание 3 — Объекты с необязательными полями
Допишите функцию, которая создаёт приветствие для пользователя
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
interface User {
  firstName: string;
  lastName?: string; // необязательное поле
  age?: number; // необязательное поле
}

function createGreeting(user: User): string {
  let greeting = `Привет, ${user.firstName}`;

  if (user.lastName) {
    greeting += ` ${user.lastName}`;
  }

  if (user.age) {
    greeting += ` (${user.age} лет)`;
  }

  return greeting + "!";
}

// Проверка:
console.log(createGreeting({ firstName: "Иван" })); // Привет, Иван!
console.log(createGreeting({ firstName: "Мария", lastName: "Петрова" })); // Привет, Мария Петрова!
console.log(createGreeting({ firstName: "Петр", age: 25 })); // Привет, Петр (25 лет)!

export {}; // так можно сделать из этого файла модуль
