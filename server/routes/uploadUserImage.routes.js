const router = require('express').Router();
const fileMiddleware = require('../middlewares/file');

router
  .get('/', (req, res) => {
    res.send('/api/profile/uploadImage/')
  })
  .post('/', fileMiddleware.single('avatar'), (req, res) => {
    try {
      if (req.file) {
        // записать path в базу данных
        res.json(req.file);
      }
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
