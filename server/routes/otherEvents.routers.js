const router = require('express').Router();
const { Op } = require('sequelize');
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  const userId = req.session.user_id;
  const otherEvents = await Event.findAll({
    where: {
      userID: {
        [Op.ne]: userId,
      },
    },
  });
  res.status(200).json({
    events: otherEvents,
  });
});

module.exports = router;
