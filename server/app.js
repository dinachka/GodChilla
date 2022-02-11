const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const path = require('path');
const { initWebSockets } = require('./ws');
const { extractUser, sessionMW } = require('./middlewares/sessions');

const app = express();
// app.use(helmet());
app.use(morgan('dev'));

dotenv.config();

const { PORT = 4000 } = process.env;

const publicEventsRouter = require('./routes/getEvents.routes');
const registrationRouter = require('./routes/registration.routes');
const loginRouter = require('./routes/login.routes');
const currentEventRouter = require('./routes/currentEvent.routes');
const otherEventsRouter = require('./routes/otherEvents.routers');
const currentUsersEventRouter = require('./routes/currentUsersEvents.routes');
const logoutRouter = require('./routes/logout.routes');
const friendsRouter = require('./routes/friendship.routes');
const allUsersRouter = require('./routes/allUsers.routes');
const friendshipRequestsNotificationsRouter = require('./routes/friendship.routes');
const closestEvents = require('./routes/closestEvents.routes');
const acceptFriendship = require('./routes/friendship.routes');
const rejectFriendship = require('./routes/friendship.routes');
const eventsNotifications = require('./routes/eventsNotifications.routes');
const userProfile = require('./routes/userProfile.routes');
const anotherUsersEvents = require('./routes/anotherUsersEvents.routes');
const uploadUserImage = require('./routes/uploadUserImage.routes');
const uploadEventImage = require('./routes/uploadEventImage.routes');
const messageRouter = require('./routes/message.routes');

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(sessionMW);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.json({ extended: true }));
app.use('/images/', express.static(path.join(__dirname, 'images')));

app.use(extractUser);

app.use('/api', publicEventsRouter);
app.use('/api/registration', registrationRouter);
app.use('/api/login', loginRouter);
app.use('/api/event', currentEventRouter);
app.use('/api/events', otherEventsRouter);
app.use('/api/logout', logoutRouter);

// список всех друзей на профиле
app.use('/api/profile/allFriends', friendsRouter);
// список всех пользователей для поисковика
app.use('/api/profile/allUsers', allUsersRouter);
// список событий пользователя на профиле
app.use('/api/profile/events', currentUsersEventRouter);
// уведомления о запросе о дружбе
app.use(
  '/api/profile/friendshipNotifications',
  friendshipRequestsNotificationsRouter,
);
// запрос на дружбу
app.use('/api/profile/friendRequest', friendsRouter);
// ближайшие мероприятия на главной странице
app.use('/api/closesEvents', closestEvents);
// принять заявку о дружбе
app.use('/api/profile/acceptFriendship', acceptFriendship);
// отклонить заявку о дружбе
app.use('/api/profile/rejectFriendship', rejectFriendship);
// уведомления о запросах принять уччастие в событиях
app.use('/api/profile/eventsNotifications', eventsNotifications);
// профиль юзера для отображения для остальных пользователей
app.use('/api/profile/user', userProfile);
// профиль другого юзера с его событиями
app.use('/api/profile/user/events/', anotherUsersEvents);
// сохранение и изменение аватара на профиле пользователя
app.use('/api/profile/uploadImage/', uploadUserImage);
// сохранение и изменение фотографии события на профиле пользователя
app.use('/api/profile/uploadEventImage/', uploadEventImage);

app.use('/api/messages', messageRouter);

const server = initWebSockets(app);

server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
