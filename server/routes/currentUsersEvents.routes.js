const router = require('express').Router();
const { Op } = require('sequelize');
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  console.log(123444);
  const currentUsersEvents = await Event.findAll({
    where: {
      userID: {
        [Op.eq]: req.session.user.id,
      },
    },
  });
  res.status(200).json({
    events: currentUsersEvents,
  });
});

module.exports = router;
