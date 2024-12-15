This is a [Create-React-App](https://react.dev/) project bootstrapped with [`create-react-app`](https://create-react-app.dev/docs/getting-started).

# Kanban Board на Next.js и Redux

## Описание проекта

Reviews Management App — это веб-приложение для управления отзывами. Оно позволяет фильтровать и сортировать отзывы по платформе, рейтингу и дате. Пользователь может быстро настроить отображение отзывов, используя простые инструменты фильтрации и сортировки.

## Установка и запуск

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/padrejs/habr-x-hexlet.git
   cd task-2-react
   ```

2. Установите зависимости:

    ```bash
    npm install
   ```

3. Для запуска в режиме разработки используйте команду:

    ```bash
    npm run start
   ```
   Приложение будет доступно по адресу: [localhost:3000](http://localhost:3000).

4. Чтобы собрать оптимизированную версию для production, выполните:

    ```bash
    npm run build
   ```

## Структура проекта

- `components/` — компоненты приложения.
- `components/Filters.js` — фильтры для отзывов.
- `components/Sorting.js` — сортировка отзывов.
- `components/ReviewsTable.js` — таблица для отображения отзывов.
- `store/` — Redux Store, где происходит управление состоянием приложения.
- `reducers/` — reducers
- `styles/` — файлы стилей для всего приложения.
- `public/` — публичные файлы (index.html, favicon и т.д.)

## Зависимости

- `next` — фреймворк для SSR/CSR приложений на React.
- `react` и `react-dom` — библиотеки для построения пользовательского интерфейса.
- `@reduxjs/toolkit` — библиотека для работы с состоянием приложения через Redux.
- `react-redux` — библиотека для интеграции Redux с React.

## Требования

- Node.js ≥ 16.x
- npm ≥ 8.x