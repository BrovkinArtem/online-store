# Онлайн-магазин электроники (PERN)

Небольшой учебный проект — интернет-магазин электроники на стеке PERN (Postgres + Express + React + Node). Реализовано: регистрация/авторизация с JWT, загрузка изображений товаров, CRUD для типов/брендов/устройств, пагинация и базовая админ-часть.

Технологии: Backend: Node.js, Express, Sequelize (Postgres), Frontend: React, React Bootstrap, MobX, Axios, Auth: JWT, bcrypt, Загрузка файлов: express-fileupload

Быстрый старт: создать .env в корне серверной и клиентской частей, запустить БД Postgres и указать параметры в серверном .env, установить зависимости и запустить: Backend: cd server, npm install, npm run dev; Frontend: cd client, npm install, npm start.

Переменные окружения: server/.env: PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, SECRET_KEY; client/.env: REACT_APP_API_URL=http://localhost:5000/

Структура проекта: server/index.js — точка входа сервера; server/db.js — подключение Sequelize; server/models/models.js — модели БД (User, Device и др.); server/controllers/userController.js — регистрация/логин; server/controllers/deviceController.js — добавление и получение устройств; server/routes/index.js — объединение роутеров; server/middleware/authMiddleware.js — проверка токена; server/middleware/checkRoleMiddleware.js — проверка роли; client/src/index.js — точка входа React; client/src/App.js — роутинг и инициализация авторизации; client/src/http/index.js — axios-инстансы с авторизационным интерсептором; client/src/http/userAPI.js — регистрация, логин, проверка токена; client/src/http/deviceAPI.js — работа с устройствами.

API: POST /api/user/registration — регистрация (возвращает JWT); POST /api/user/login — логин (возвращает JWT); GET /api/user/auth — проверка токена; POST /api/type, GET /api/type — типы (создание — только ADMIN); POST /api/brand, GET /api/brand — бренды (создание — только ADMIN); POST /api/device, GET /api/device, GET /api/device/:id — устройства.

Советы: перед первым запуском убедитесь, что в базе созданы нужные таблицы — сервер вызывает sequelize.sync() при старте; для загрузки изображений сервер использует папку server/static; токен хранится в localStorage на клиенте и подставляется в заголовок Authorization для защищённых запросов.

Лицензия: BrovkinArtem 2025
ithub.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
