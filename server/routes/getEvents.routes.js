const router = require('express').Router();
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  // const eventId = req.params.id;
  const publicEvents = await Event.findAll({
    where: {
      privateSettings: 'public',
    },
  });
  res.status(200).json('allEvents', {
    events: publicEvents,
  });
});

module.exports = router;
