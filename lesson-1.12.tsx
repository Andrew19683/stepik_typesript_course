/*
Задание 1 — Типизация книги
*/
interface Book {
  title: string;
  author: string;
  year: number;
  isAvailable: boolean;
}

const myBook: Book = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869,
  isAvailable: true,
};

/*
Задание 2 — Типизация фильма
*/
type Movie = {
  title: string;
  director: string;
  releaseYear: number;
  rating?: number;
};

const myMovie: Movie = {
  title: "Интерстеллар",
  director: "Кристофер Нолан",
  releaseYear: 2014,
};

/*
Задание 3 — Типизация адреса и пользователя
*/
interface Address {
  city: string;
  street: string;
  coordinates?: number[];
}

interface User {
  name: string;
  email: string;
  address: Address;
}

const userAddress: Address = {
  city: "Санкт-Петербург",
  street: "Невский проспект",
  coordinates: [59.93, 30.31],
};

const user: User = {
  name: "Анна",
  email: "anna@example.com",
  address: userAddress,
};

/*
Задание 4 — Типизация сотрудника
*/
interface Employee {
  name: string;
  position: string;
  salary?: number;
  skills?: string[];
}

const employee: Employee = {
  name: "Иван Петров",
  position: "Разработчик",
  salary: 120000,
  skills: ["TypeScript", "React", "Node.js"],
};

/*
Задание 5 — Типизация продукта и массива продуктов
*/
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  { id: 1, name: "Ноутбук", price: 50000, inStock: true },
  { id: 2, name: "Мышь", price: 1500, inStock: false },
];

/*
Задание 6 — Типизация пропсов для React-компонента
*/
interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
  isActive?: boolean;
}

function Card({ title, description, onClick, isActive }: CardProps) {
  return "";
}

<Card
  title="Заголовок"
  description="Описание карточки"
  onClick={() => console.log("Клик!")}
/>;

/*
Задание 7 — Типизация университета
*/
interface Department {
  name: string;
  professors: string[];
}

interface University {
  name: string;
  departments: Department[];
}

const myUniversity: University = {
  name: "СПбГУ",
  departments: [
    { name: "Математики", professors: ["Иванов", "Петров", "Сидорова"] },
    { name: "Физики", professors: ["Кузнецов", "Васильева"] },
  ],
};

/*
Задание 8 — Типизация заказа и функции подсчёта
*/
interface OrderItem {
  product: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  customerName: string;
  items: OrderItem[];
}

const orders: Order[] = [
  {
    id: 1,
    customerName: "Алексей",
    items: [
      { product: "Книга", quantity: 2, price: 500 },
      { product: "Ручка", quantity: 5, price: 100 },
    ],
  },
];

/*
Задание 9 — Типизация блога и поста 
*/
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  tags: string[];
  publishedAt: Date;
}

interface Blog {
  name: string;
  posts: BlogPost[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Введение в TypeScript",
    content: "TypeScript — это типизированный JavaScript...",
    author: "Кукушник Степан",
    tags: ["TypeScript", "Программирование"],
    publishedAt: new Date("2027-06-10"),
  },
  {
    id: 2,
    title: "Как писать чистый код",
    content: "Чистый код — это код, который легко читать и поддерживать...",
    author: "Иван Иванов",
    tags: ["Clean Code", "Best Practices"],
    publishedAt: new Date("2027-04-11"),
  },
];

const myBlog: Blog = {
  name: "Мой технический блог",
  posts: blogPosts,
};

/*
Задание 10 — Типизация задачи и доски задач (Kanban)
*/
interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  assignee?: string;
  dueDate?: Date;
}

interface KanbanBoard {
  name: string;
  tasks: Task[];
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Написать урок по TypeScript",
    description: "Подготовить материал",
    status: "In Progress",
    assignee: "Вася",
    dueDate: new Date("2026-03-15"),
  },
  {
    id: 2,
    title: "Протестировать новый функционал",
    description: "Проверить работу API",
    status: "To Do",
    dueDate: new Date("2026-03-18"),
  },
];

const kanbanBoard: KanbanBoard = {
  name: "Проект: Курс по TypeScript",
  tasks: tasks,
};
