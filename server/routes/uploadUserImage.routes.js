const router = require('express').Router();
const path = require('path');
const fileMiddleware = require('../middlewares/file');
const { User } = require('../db/models');

router
  .get('/', async (req, res) => {
    const currentUser = await User.findOne({
      where: {
        id: req.session.user.id,
      },
    });
    res.json(currentUser.photo);
  })
  .put('/', fileMiddleware.single('avatar'), async (req, res) => {
    try {
      const updatedAva = await User.update(
        { photo: `http://localhost:4000${req.file}` },
        {
          where: {
            id: req.session.user.id,
          },
        },
      );
      res.status(200).json({ message: 'Фотография обновлена', updatedAva });
    } catch (error) {
      res.status(404).json({ error });
    }
    // try {
    //   if (req.file) {
    //     // записать path в базу данных
    //     res.json(req.file);
    //     // res.sendFile(req.file);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  });

module.exports = router;
