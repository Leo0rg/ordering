# Booking.io - Сервис онлайн-бронирования

Современный сайт для онлайн-бронирования услуг, разработанный с использованием Next.js, React и TypeScript.

## Функциональность

- Каталог услуг с возможностью фильтрации
- Каталог специалистов с рейтингами и отзывами
- Интерактивная система бронирования с календарем и выбором времени
- Адаптивный дизайн для всех устройств
- Черно-белая цветовая схема с акцентами в виде радужных градиентов
- Дизайн в стиле Bento с прямоугольными элементами и минимальными скруглениями

## Технологический стек

- **Frontend**: Next.js 15, React 19, TypeScript
- **Стилизация**: Tailwind CSS 4
- **Шрифты**: Geist Sans и Geist Mono
- **Инструменты разработки**: TurboRepo

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск в продакшен-режиме
npm start
```

## Структура проекта

- `src/app/components` - компоненты приложения
  - `/layout` - компоненты макета (шапка, подвал, основной layout)
  - `/catalog` - компоненты для отображения услуг и специалистов
  - `/booking` - компоненты для бронирования (календарь, выбор времени, форма)
- `src/app` - страницы приложения
  - `/services` - страница услуг
  - `/specialists` - страница специалистов
  - `/booking` - страница бронирования
- `public/images` - изображения для услуг и специалистов

## Особенности дизайна

- Черно-белая цветовая схема
- Острые прямоугольные элементы в стиле Bento
- Минимальные закругления углов
- Градиенты для выделения ключевых элементов
- Адаптивность для всех типов устройств

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
