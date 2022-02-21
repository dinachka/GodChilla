GodChilla

социальная сеть для планирования индивидуального и совместного отдыха.
Стек технологий:

Front: JavaScript, React, Redux, Redux-Saga, HTML5, CSS, JSX;
Back: Node.js, Express, Sessions, Bcrypt, Multer, Socket.io;
DB: PostgreSQL, Sequelize ORM.
Установка:

В директории 2 папки:

"server" отвечает за back-end.

cd server
npm ci
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
"client" отвечает за front-end.

cd client
npm ci
npm start
