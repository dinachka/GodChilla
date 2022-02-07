const router = require('express').Router();

router
  .get('/', (req, res) => {
    try {
      res.clearCookie('user_sid');
      req.session.destroy();
      res.status(200).json({
        message: 'Выход выполнен!',
      });
    } catch (error) {
      res.status(400).json({
        error,
        message: 'Что-то пошло не так, попробуйте ещё раз!',
      });
    }
  });

module.exports = router;
