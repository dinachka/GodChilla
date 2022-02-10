const router = require('express').Router();
const fileMiddleware = require('../middlewares/avatarMiddleware');
const { User } = require('../db/models');

router
  .put('/:id', fileMiddleware.single('avatar'), async (req, res) => {
    try {
      await User.update(
        { photo: `http://localhost:4000/${req.file.path}` },
        {
          where: {
            id: req.params.id,
          },
        },
      );
      const updatedAva = await User.findOne({
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.status(200).json({ photoURL: updatedAva.photo });
    } catch (error) {
      console.log(error.message);
      // res.status(404).json({ error });
    }
  });

module.exports = router;
