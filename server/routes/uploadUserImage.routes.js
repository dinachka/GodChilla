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
      req.session.user.photo = updatedAva.photo;
      res.status(200).json({ photoURL: updatedAva.photo });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

module.exports = router;
