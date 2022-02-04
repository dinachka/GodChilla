const router = require('express').Router();
const { Event } = require('../db/models');

router.post('api/event', async (req, res) => {
  const {
    title,
    description,
    privateSettings,
    location,
    dateTime,
    photo,
  } = req.body;

  const newEvent = await Event.create({
    title,
    description,
    privateSettings,
    location,
    dateTime,
    photo,
  });

  if (newEvent) {
    res.status(200).json({
      newEvent,
      message: 'Событие создано, пригласите друзей!',
    });
  } else {
    res.json(400).json({
      message: 'Событие не создано, что-то пошло не так!',
    });
  }
});

module.exports = router;
