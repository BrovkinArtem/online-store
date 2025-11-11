# Онлайн-магазин электроники (PERN)

Небольшой учебный проект — интернет-магазин электроники на стеке PERN (Postgres + Express + React + Node). Реализовано: регистрация/авторизация с JWT, загрузка изображений товаров, CRUD для типов, брендов и устройств, пагинация и базовая админ-часть.

Технологии: Backend: Node.js, Express, Sequelize (Postgres), Frontend: React, React Bootstrap, MobX, Axios, Auth: JWT, bcrypt, Загрузка файлов: express-fileupload.

Быстрый старт: создайте `.env` в корне серверной и клиентской частей, запустите БД Postgres и укажите параметры в серверном `.env`, затем установите зависимости и запустите проект.

**Backend:**
```bash
cd server
npm install
npm run dev
```

**Frontend:**
```bash
cd client
npm install
npm start
```

Переменные окружения server/.env:
```env
PORT=5000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=your_jwt_secret
```

Переменные окружения client/.env:
```env
REACT_APP_API_URL=http://localhost:5000/
```

Структура проекта:

**Server:**  
- `server/index.js` — точка входа сервера  
- `server/db.js` — подключение Sequelize  
- `server/models/models.js` — модели БД (User, Device и др.)  
- `server/controllers/userController.js` — регистрация и логин  
- `server/controllers/deviceController.js` — добавление и получение устройств  
- `server/routes/index.js` — объединение роутеров  
- `server/middleware/authMiddleware.js` — проверка токена  
- `server/middleware/checkRoleMiddleware.js` — проверка роли  

**Client:**  
- `client/src/index.js` — точка входа React  
- `client/src/App.js` — роутинг и инициализация авторизации  
- `client/src/http/index.js` — axios-инстансы с авторизационным интерсептором  
- `client/src/http/userAPI.js` — регистрация, логин, проверка токена  
- `client/src/http/deviceAPI.js` — работа с устройствами  

API:

- `POST /api/user/registration` — регистрация (возвращает JWT)  
- `POST /api/user/login` — логин (возвращает JWT)  
- `GET /api/user/auth` — проверка токена  
- `POST /api/type` — создание типа (только ADMIN)  
- `GET /api/type` — получение типов  
- `POST /api/brand` — создание бренда (только ADMIN)  
- `GET /api/brand` — получение брендов  
- `POST /api/device` — добавление устройства  
- `GET /api/device` — получение устройств  
- `GET /api/device/:id` — получение устройства по id  

Перед первым запуском убедитесь, что в базе созданы нужные таблицы — сервер вызывает `sequelize.sync()` при старте. Для загрузки изображений сервер использует папку `server/static`. Токен хранится в `localStorage` на клиенте и подставляется в заголовок `Authorization` для защищённых запросов.

Лицензия: BrovkinArtem 2025
