const router = require('express').Router();
const fileMiddleware = require('../middlewares/file');
const { User } = require('../db/models');

router
  .put('/:id', fileMiddleware.single('avatar'), async (req, res) => {
    try {
      const updatedAva = await User.update(
        { photo: `http://localhost:4000/${req.file.path}` },
        {
          where: {
            id: req.params.id,
          },
        },
      );
      console.log('!!!!!!!!!!!!!!!', updatedAva);
      res.status(200).json({ message: 'Фотография обновлена', photoURL: updatedAva.photo });
    } catch (error) {
      console.log(error.message);
      // res.status(404).json({ error });
    }
  });

module.exports = router;
