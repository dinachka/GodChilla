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
    // console.log(closestEvents);
    res.json(closestEvents);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
