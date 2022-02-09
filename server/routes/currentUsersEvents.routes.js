const router = require('express').Router();
const { Op } = require('sequelize');
const { Event, Participation } = require('../db/models');

router.get('/', async (req, res) => {
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

router.get('/otherEventsOnProfile', async (req, res) => {
  const { id } = req.session.user;
  try {
    const myParticipations = await Participation.findAll({
      raw: true,
      where: {
        userID: +id,
        status: 'Подтвержден',
      },
      attributes: ['eventID'],
    });
    const myParticipationsIds = myParticipations.map((el) => el.eventID);
    const events = await Event.findAll({
      raw: true,
      where: {
        id: myParticipationsIds,
      },
    });
    console.log(events, 'events');
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
