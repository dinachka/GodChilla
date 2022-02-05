const router = require('express').Router();
const { Op } = require('sequelize');
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  const eventId = req.params.id;
  const otherEvents = await Event.findAll({
    where: {
      id: {
        [Op.ne]: eventId,
      },
    },
  });
  res.status(200).json('allEvents', {
    events: otherEvents,
  });
});

module.exports = router;
