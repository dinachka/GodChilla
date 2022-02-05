const router = require('express').Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  console.log(req.body);
  const {
    username,
    email,
    password,
    name,
    lastName,
    phoneNumber,
    photo,
  } = req.body;
  if (password.length < 6) {
    res.status(400).json({ user: false, message: 'Длина пароля должна быть больше 6 символов' });
  }
  let newUser;
  const sameUser = await User.findOne({
    where: {
      [Op.or]: [
        { username },
        { email },
      ],
    },
  });
  if (!sameUser) {
    const hashPassword = await bcrypt.hash(password, 10);
    newUser = await User.create({
      password: hashPassword,
      username,
      email,
      name,
      lastName,
      phoneNumber,
      photo,
    });
  } else {
    res.status(400).json({ user: false, message: 'Юзер с таким логином или email уже существует' });
  }
  if (newUser) {
    res.status(201).json({ user: newUser, message: 'Регистрация прошла успешно!' });
  } else {
    res.status(401).json({ user: false, message: 'Регистрация не прошла!' });
  }
});

module.exports = router;
