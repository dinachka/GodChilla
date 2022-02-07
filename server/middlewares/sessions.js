module.exports = (req, res, next) => {
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
};
