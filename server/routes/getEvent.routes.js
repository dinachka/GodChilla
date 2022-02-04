const router = require('express').Router();
const { Event } = require('../db/models');

router.get('/:id', async (req, res) => {
  const eventId = req.params.id;
  const eventToEdit = await Event.findOne({
    where: {
      id: eventId,
    },
  });
  const partyExists = eventToEdit;
  res.status(200).json('editEvent', { party: eventToEdit, partyExists });
});

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
