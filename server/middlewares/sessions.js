const session = require('express-session');
const SessionFileStore = require('session-file-store')(session);

const { SESSION_SECRET = 'my_secret' } = process.env;

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

const sessionMW = session(sessionConfig);
module.exports = {
  sessionMW,
  extractUser: (req, res, next) => {
    if (req.session && req.session.user) {
      res.locals.id = req.session.user.id;
      res.locals.username = req.session.user.username;
      res.locals.name = req.session.user.name;
      res.locals.lastName = req.session.user.lastName;
      res.locals.phoneNumber = req.session.user.phoneNumber;
      res.locals.photo = req.session.user.photo;
      res.locals.email = req.session.user.email;
      res.locals.signedUp = req.session.user.signedUp;
    } else {
      res.locals.signedUp = false;
    }
    next();
  },
};
