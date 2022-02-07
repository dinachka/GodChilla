const router = require('express').Router();
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const closestEvents = await Event.findAll({
      where: {
        privateSettings: 'Для всех',
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
