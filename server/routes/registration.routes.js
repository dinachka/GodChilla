const router = require('express').Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    // username,
    email,
    password,
    // phoneNumber,
    // photo,
    city,
  } = req.body;
  const name =
    req.body.name[0].toUpperCase() + req.body.name.slice(1).toLowerCase();
  const lastName =
    req.body.lastName[0].toUpperCase() +
    req.body.lastName.slice(1).toLowerCase();

  if (password.length < 6) {
    res.status(400).json({
      user: false,
      message: 'Длина пароля должна быть больше 6 символов',
    });
  }
  let newUser;
  try {
    const sameUser = await User.findOne({
      where: {
        [Op.or]: [
          // { username },
          { email: { [Op.iLike]: email } },
        ],
      },
    });
    if (!sameUser) {
      const hashPassword = await bcrypt.hash(password, 10);
      newUser = await User.create({
        password: hashPassword,
        // username,
        email,
        name,
        lastName,
        // phoneNumber,
        // photo,
        city,
      });
    } else {
      res
        .status(400)
        .json({ user: false, message: 'Юзер с таким email уже существует' });
    }
    if (newUser) {
      res.status(201).json({ user: true });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      user: false,
      message: 'Регистрация не прошла. Ошибка обращения к базе данных',
      error: error.message,
    });
  }
});

module.exports = router;
