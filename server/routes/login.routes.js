const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const currentUser = await User.findOne({
    where: {
      email,
    },
  });
  if (!currentUser) {
    res.status(401).json({
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
    login: currentUser.login,
    email,
    signedUp: true,
  };
  res.json({
    message: 'Логин успешный!',
    auth: true,
  });
});

module.exports = router;

// router.route('/login')
//   .post(async (req, res) => {
//     try {
//       const { email } = req.body;
//       const user = await User.findOne(
//         {
//           email,
//         },
//       );
//       if (!user) {
//         res.json(400).json({ message: 'Пользователь с таким email не зарегистрирован!' });
//         return;
//       }
//       res.status(200).json(user);
//       return;
//     } catch (error) {
//       res.status(500).json(error.message);
//     }
//   });
// User.create(req.body)
//   .then((User) => res.status(201).json(User))
//   .catch((error) => res.status(500).json(error));
