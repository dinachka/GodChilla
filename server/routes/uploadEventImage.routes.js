const router = require('express').Router();
const eventsImageMiddleware = require('../middlewares/eventsImageMiddleware');
// const { Event } = require('../db/models');

router.post('/', eventsImageMiddleware.single('eventImage'), async (req, res) => {
  const eventImagePath = `http://localhost:4000/${req.file.path}`;
  res.json(eventImagePath);
});

module.exports = router;
