const router = require('express').Router();
const { Op } = require('sequelize');
const { Event, User } = require('../db/models');

router.get('/', async (req, res) => {
  const otherEvents = await Event.findAll({
    where: {
      userID: {
        [Op.ne]: req.session.user.id,
      },
      [Op.or]: [
        { privateSettings: 'public' },
        { privateSettings: 'forFriends' },
      ],
    },
    include: [{
      model: User,
    }],
  });
  res.status(200).json({
    events: otherEvents,
  });
});

module.exports = router;
