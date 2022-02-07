const express = require('express');
const session = require('express-session');
const SessionFileStore = require('session-file-store')(session);
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(morgan('dev'));

dotenv.config();

const {
  PORT = 4000,
  SESSION_SECRET = 'my_secret',
} = process.env;

const publicEventsRouter = require('./routes/getEvents.routes');
const registrationRouter = require('./routes/registration.routes');
const loginRouter = require('./routes/login.routes');
const currentEventRouter = require('./routes/currentEvent.routes');
const otherEventsRouter = require('./routes/otherEvents.routers');
const currentUsersEventRouter = require('./routes/currentUsersEvents.routes');
const logoutRouter = require('./routes/logout.routes');
const friendsRouter = require('./routes/friendship.routes');
const allUsersRouter = require('./routes/allUsers.routes');
const requestedFriendships = require('./routes/friendship.routes');
const friendshipRequestsNotificationsRouter = require('./routes/friendship.routes');
const closestEvents = require('./routes/closestEvents.routes');

const sessionConfig = {
  store: new SessionFileStore(),
  name: 'user_sid',
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(session(sessionConfig));
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
app.use('/api/profile/friendshipNotifications', friendshipRequestsNotificationsRouter);
// запрос на дружбу
app.use('/api/profile/friendRequest', friendsRouter);
// ближайшие мероприятия на главной странице
app.use('/api/closesEvents', closestEvents);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
