const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const currentUser = await User.findOne({
    where: {
      email,
    },
  });
  if (!currentUser) {
    res.status(404).json({
      message: 'Юзер не найден!',
      auth: false,
    });
    return;
  }

  const correctPassword = await bcrypt.compare(password, currentUser.password);
  if (!correctPassword) {
    res.status(401).json({
      message: 'Пароль некорректный!',
      auth: false,
    });
    return;
  }
  req.session.user = {
    id: currentUser.id,
    username: currentUser.username,
    name: currentUser.name,
    lastName: currentUser.lastName,
    phoneNumber: currentUser.phoneNumber,
    photo: currentUser.photo,
    email,
    signedUp: true,
  };
  req.session.user_id = currentUser.id;
  res.status(200).json({
    id: req.session.user.id,
    message: 'Логин успешный!',
    auth: true,
    name: req.session.user.name,
    lastName: req.session.user.lastName,
  });
});

router.get('/', async (req, res) => {
  if (req.session.user) {
    return res.status(200).json({
      isUser: true,
      name: req.session.user.name,
      message: 'Сессия найдена',
    });
  } return res.status(404).json({
    isUser: false,
    message: 'Сессия не найдена',
  });
});

module.exports = router;
