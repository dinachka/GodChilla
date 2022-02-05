const router = require('express').Router();
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  const eventId = req.params.id;
  const allEvents = await Event.findAll({
    where: {
      id: eventId,
    },
  });
  res.status(200).json('allEvents', {
    events: allEvents,
  });
});

module.exports = router;
