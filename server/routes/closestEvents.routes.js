const router = require('express').Router();
const { Op } = require('sequelize');
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const closestEvents = await Event.findAll({
      where: {
        [Op.or]: [{ privateSettings: 'public' }, { privateSettings: 'forFriends' }],
      },
      order: [['dateTime', 'ASC']],
      raw: true,
    });
    res.json(closestEvents);
  } catch (error) {
    res.json({error: error.message});
  }
});

module.exports = router;
