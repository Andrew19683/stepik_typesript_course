export {}; // чтобы не ругалось в задании 7 на awaint

/*
Задание 1 — any и unknown
Допишите функцию, которая принимает значение любого типа и возвращает его строковое представление, если значение — строка, верните её, если значение — число, верните строковое представление числа, если значение — объект, верните строку "[object Object]", для null и undefined верните "пусто"
*/
console.log(`===== ЗАДАНИЕ 1 =====`);
function stringify(value: unknown): string {
  // Ваш код здесь
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return value.toString();
  }
  if (typeof value === "object" && value !== null) {
    return "[object Object]";
  }
  return "пусто";
}

// Проверка:
console.log(stringify("привет"));   // "привет"
console.log(stringify(42));         // "42"
console.log(stringify({ a: 1 }));   // "[object Object]"
console.log(stringify(null));       // "пусто"
console.log(stringify(undefined));  // "пусто"

console.log("");

/*
Задание 2 — never в недостижимом коде
Допишите функцию, которая выбрасывает ошибку с сообщением, используйте never для возвращаемого типа
*/
console.log(`===== ЗАДАНИЕ 2 =====`);
function throwError(message: string): never {
  throw new Error(message);
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throwError("Деление на ноль!");
  }
  return a / b;
}

// Проверка:
console.log(divide(10, 2));    // 5
// console.log(divide(10, 0)); // Ошибка: Деление на ноль!

console.log("");

/*
Задание 3 — void в функциях
Допишите функцию, которая выбрасывает ошибку с сообщением, используйте never для возвращаемого типа. Можете пока на практике посмотреть, как работает дженерик.
*/
console.log(`===== ЗАДАНИЕ 3 =====`);
function forEach<T>(items: T[], callback: (item: T, index: number) => void): void {
  for (let i = 0; i < items.length; i++) {
    callback(items[i], i);
  }
}

// Проверка:
forEach([1, 2, 3], (item, index) => {
  console.log(`Элемент ${index}: ${item}`);
});
// Элемент 0: 1
// Элемент 1: 2
// Элемент 2: 3

// Можно передать функцию, которая возвращает значение — оно проигнорируется
forEach(["a", "b"], (item) => item.toUpperCase()); // Ок

console.log("");

/*
Задание 4 — unknown и массивы
Допишите функцию, которая проверяет, является ли unknown массивом чисел, если да — верните сумму всех чисел, если нет — верните null. Здесь вам может пригодиться метод массива .every().
*/
console.log(`===== ЗАДАНИЕ 4 =====`);
function sumNumbers(value: unknown): number | null {
  // Сначала проверьте, что value — массив
  if (Array.isArray(value)) {
    // Затем проверьте, что каждый элемент — число
    if (value.every((item): item is number => typeof item === "number")) {
      return value.reduce((acc, num) => acc + num, 0);
    }
  }
  return null;
}

// Проверка:
console.log(sumNumbers([1, 2, 3, 4]));      // 10
console.log(sumNumbers([1, "2", 3]));       // null
console.log(sumNumbers({ a: 1, b: 2 }));    // null
console.log(sumNumbers("не массив"));       // null

console.log("");

/*
Задание 5 — never в исчерпывающих проверках
Допишите функцию так, чтобы TypeScript гарантировал, что обработаны все возможные варианты
*/
console.log(`===== ЗАДАНИЕ 5 =====`);
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      // Если добавится новый тип фигуры, здесь будет ошибка
      const exhaustiveCheck: never = shape;
      throw new Error(`Неизвестная фигура: ${exhaustiveCheck}`);
  }
}

// Проверка:
console.log(getArea({ kind: "circle", radius: 5 }));              // ~78.5
console.log(getArea({ kind: "square", side: 4 }));                // 16
console.log(getArea({ kind: "rectangle", width: 3, height: 5 })); // 15

console.log("");

/*
Задание 6: never и рекурсивная проверка
Напишите функцию, которая принимает массив значений типа unknown и возвращает новый массив, содержащий только строки. Если в массиве встречается значение, не являющееся строкой, выбросьте ошибку с использованием never.
*/
console.log(`===== ЗАДАНИЕ 6 =====`);
function filterStrings(values: unknown[]): string[] {
  // Ваш код здесь
  const result: string[] = [];
  for (const value of values) {
    if (typeof value === "string") {
      result.push(value);
    } else {
      // Используйте never для несовместимых типов
      throw new Error(`Некорректное значение: ${value}`);
    }
  }
  return result;
}

// Проверка:
console.log(filterStrings(["a", "b", "c"]));  // ["a", "b", "c"]
// console.log(filterStrings(["a", 1, "c"])); // Ошибка: Некорректное значение: 1

console.log("");

/*
Задание 7 — void и Promise
Допишите асинхронную функцию, которая логирует данные и ничего не возвращает
*/
console.log(`===== ЗАДАНИЕ 7 =====`);
async function logData<T>(data: T): Promise<void> {
  console.log("Логируем данные:", data);
  // Функция ничего не возвращает
}

// Проверка:
await logData({ user: "Иван", action: "login" });
// "Логируем данные: { user: "Иван", action: "login" }"

console.log("");

/*
Задание 8 — never и ошибки
Допишите функцию валидации, которая выбрасывает ошибку с деталями
*/
console.log(`===== ЗАДАНИЕ 8 =====`);
interface ValidationError {
  field: string;
  message: string;
}

function throwValidationError(field: string, message: string): never {
  const error: ValidationError = { field, message };
  throw new Error(JSON.stringify(error));
}

function validateUser(user: any): true | never {
  if (!user.name) {
    throwValidationError("name", "Имя обязательно");
  }
  if (user.age < 18) {
    throwValidationError("age", "Возраст должен быть не менее 18 лет");
  }
  return true;
}

// Проверка:
// console.log(validateUser({ age: 16 }));               // Ошибка с полем name
// console.log(validateUser({ name: "Иван", age: 16 })); // Ошибка с полем age
console.log(validateUser({ name: "Иван", age: 25 }));    // true


console.log("");
/*
Задание 9 — unknown и пользовательские проверки
Допишите type guard для проверки, что unknown является объектом с полями id и name
*/
console.log(`===== ЗАДАНИЕ 9 =====`);
interface Entity {
  id: number;
  name: string;
}

function isEntity(value: unknown): value is Entity {
  // Проверьте, что value — объект
  if (typeof value !== "object" || value === null) return false;
  
  const obj = value as Record<string, unknown>;
  
  // Проверьте наличие и типы полей
  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string"
  );
}

function processEntity(value: unknown): string {
  if (isEntity(value)) {
    return `Обработка сущности: ${value.name} (ID: ${value.id})`;
  }
  return "Невалидная сущность";
}

// Проверка:
console.log(processEntity({ id: 1, name: "Анна" }));   // "Обработка сущности: Анна (ID: 1)"
console.log(processEntity({ id: "1", name: "Анна" })); // "Невалидная сущность"
console.log(processEntity({ name: "Анна" }));          // "Невалидная сущность"
console.log(processEntity(null));                      // "Невалидная сущность"

console.log("");

/*
Задание 10 — все специальные типы вместе
Допишите функцию, которая демонстрирует использование всех специальных типов
*/
console.log(`===== ЗАДАНИЕ 10 =====`);
function processData(
  data: unknown,
  onError: (msg: string) => never,
  logger: (msg: string) => void
): void {
  if (typeof data === "string") {
    logger(`Получена строка: ${data}`);
  } else if (typeof data === "number") {
    logger(`Получено число: ${data}`);
  } else if (data === null) {
    onError("Получен null, а ожидались данные");
  } else {
    logger(`Получен объект с ключами: ${Object.keys(data || {}).join(", ")}`);
  }
}

// Проверка:
processData(
  "тест",
  (msg) => { throw new Error(msg); },
  (msg) => console.log("LOG:", msg)
);
// LOG: Получена строка: тест

processData(
  42,
  (msg) => { throw new Error(msg); },
  (msg) => console.log("LOG:", msg)
);
// LOG: Получено число: 42