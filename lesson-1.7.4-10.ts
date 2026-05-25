let taskNumber: number = 4;
/*
Задание 4 — Массивы объектов
Допишите функцию, которая находит пользователя по id
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

function findUserById(users: User[], id: number): User | null {
  // Верните пользователя с указанным id или null, если не найден

  for (const user of users) {
    if (user.id === id) {
      return user;
    }
  }

  return null;
}

// Проверка:
const users = [
  { id: 1, name: "Анна", isActive: true },
  { id: 2, name: "Иван", isActive: false },
  { id: 3, name: "Мария", isActive: true },
];

console.log(findUserById(users, 2)); // { id: 2, name: "Иван", isActive: false }
console.log(findUserById(users, 5)); // null

console.log();
/*
Задание 5 — Функции с колбэками
Допишите функцию, которая применяет операцию к каждому элементу массива
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
function processArray(
  numbers: number[],
  operation: (a: number) => number | string | boolean,
) {
  const result = [];

  for (const num of numbers) {
    result.push(operation(num));
  }

  return result;
}

// Проверка:
console.log(processArray([1, 2, 3, 4], (x) => x * 2)); // [2, 4, 6, 8]
console.log(processArray([1, 2, 3, 4], (x) => x.toString())); // ["1", "2", "3", "4"]
console.log(processArray([1, 2, 3, 4], (x) => x > 2)); // [false, false, true, true]

console.log("");
/*
Задание 6 — Кортежи (tuples)
Допишите функцию, которая работает с координатами
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
type Point = [number, number]; // кортеж

function calculateDistance(point1: Point, point2: Point): number {
  // Вычисляет расстояние между двумя точками по теореме Пифагора
  const dx = point1[0] - point2[0];
  const dy = point1[1] - point2[1];

  return Math.sqrt(dx * dx + dy * dy);
}

// Проверка:
const p1: Point = [0, 0];
const p2: Point = [3, 4];

console.log(calculateDistance(p1, p2)); // 5
console.log(calculateDistance([1, 1], [4, 5])); // 5

console.log("");
/*
Задание 7 — Функции с возвратом разных типов
Допишите функцию, которая возвращает разные типы в зависимости от флага
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
function getData(asString: boolean): string | object {
  const data = { id: 1, name: "Анна", age: 25 };

  if (asString) {
    // Вернуть как строку: "ID: 1, Имя: Анна, Возраст: 25"
    return `ID: ${data.id}, Имя: ${data.name}, Возраст: ${data.age}`;
  } else {
    // Вернуть как объект
    return data;
  }
}

// Проверка:
console.log(getData(true)); // ID: 1, Имя: Анна, Возраст: 25
console.log(getData(false)); // { id: 1, name: "Анна", age: 25 }

console.log("");
/*
Задание 8 — Массивы с разными типами (union)
Допишите функцию, которая фильтрует только числа из смешанного массива
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
function filterNumbers(mixedArray: (number | string)[]): number[] {
  const result = [];

  for (const item of mixedArray) {
    if (typeof item === "number") {
      result.push(item);
    }
  }

  return result;
}

// Проверка:
console.log(filterNumbers([1, "два", 3, "четыре", 5])); // [1, 3, 5]
console.log(filterNumbers(["a", "b", "c"])); // []
console.log(filterNumbers([10, 20, 30])); // [10, 20, 30]

console.log("");
/*
Задание 9 — Объекты с вложенными объектами
Допишите функцию, которая получает полный адрес пользователя
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
interface Address {
  city: string;
  street: string;
  house: number;
}

interface UserWithAddress {
  name: string;
  address: Address;
}

function getFullAddress(user: UserWithAddress): string {
  // Верните строку вида: "г. Москва, ул. Тверская, д. 15"

  const address = user.address;
  return `г. ${address.city}, ул. ${address.street}, д. ${address.house}`;
}

// Проверка:
const user = {
  name: "Иван",
  address: {
    city: "Москва",
    street: "Тверская",
    house: 15,
  },
};

console.log(getFullAddress(user)); // г. Москва, ул. Тверская, д. 15

console.log("");
/*
Задание 10 — Функции с опциональными параметрами
Допишите функцию, которая логирует сообщение с опциональным уровнем
*/
console.log(`===== ЗАДАНИЕ ${taskNumber++} =====`);
function logMessage(message: string, level?: string): void {
  const timestamp = new Date().toISOString();

  if (level) {
    console.log(`[${timestamp}] [${level}] ${message}`);
  } else {
    console.log(`[${timestamp}] ${message}`);
  }
}

// Проверка:
logMessage("Сервер запущен"); // [2024-01-01T12:00:00.000Z] Сервер запущен
logMessage("Ошибка подключения", "ERROR"); // [2024-01-01T12:00:00.000Z] [ERROR] Ошибка подключения
logMessage("Предупреждение", "WARN"); // [2024-01-01T12:00:00.000Z] [WARN] Предупреждение

export {};
