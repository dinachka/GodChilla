const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const currentUser = await User.findOne({
      where: {
        email,
      },
    });
    if (!currentUser) {
      res.status(404).json({
        message: 'Юзер не найден!',
        isUser: false,
      });
      return;
    }

    const correctPassword = await bcrypt.compare(password, currentUser.password);
    if (!correctPassword) {
      res.status(401).json({
        message: 'Пароль некорректный!',
        isUser: false,
      });
      return;
    }
    req.session.user = {
      id: currentUser.id,
      // username: currentUser.username,
      name: currentUser.name,
      lastName: currentUser.lastName,
      phoneNumber: currentUser.phoneNumber,
      photo: currentUser.photo,
      email,
      city: currentUser.city,
      isUser: true,
    };
    res.status(200).json({
      id: req.session.user.id,
      message: 'Логин успешный!',
      isUser: true,
      name: req.session.user.name,
      lastName: req.session.user.lastName,
      photo: req.session.user.photo,
    });
  } catch (error) {
    res.status(401).json({ isUser: false, message: 'Ошибка обращения к базе данных', error: error.message });
  }
});

router.get('/', async (req, res) => {
  if (req.session.user) {
    // const user = await User.findOne({
    //   where: {
    //     id: req.session.user.id,
    //   },
    // });
    // const { user } = req.session;
    return res.status(200).json(req.session.user);
  } return res.status(404).json({
    isUser: false,
    // message: 'Сессия не найдена',
  });
});

module.exports = router;
