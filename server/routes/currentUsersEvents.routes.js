const router = require('express').Router();
const { Op } = require('sequelize');
const { Event, Participation, Category, User } = require('../db/models');

router.get('/', async (req, res) => {
  const now = (new Date()).toISOString();
  const currentUsersEvents = await Event.findAll({
    where: {
      userID: {
        [Op.eq]: req.session.user.id,
      },
      dateTime: { [Op.gte]: now },

    },
  });

  res.status(200).json({
    events: currentUsersEvents,
  });
});

router.get('/otherEventsOnProfile', async (req, res) => {
  const now = (new Date()).toISOString();

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
        dateTime: { [Op.gte]: now },
      },
      include: [{
        model: User,
      }],
    });
    console.log(events);
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/rejectParticipationOnProfile/:id', async (req, res) => {
  const eventID = +(req.params.id);
  const userID = +(req.session.user.id);
  try {
    await Participation.destroy({
      where: {
        eventID,
        userID,
      },
    });
    res.status(200).json({
      eventID,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.get('/pastEvents', async (req, res) => {
  const now = (new Date()).toISOString();
  const { id } = req.session.user;

  try {
    const myPastEvents = await Event.findAll({
      raw: true,
      where: {
        userID: +id,
        dateTime: { [Op.lt]: now },
      },
    });
    res.status(200).json({ myPastEvents });
  } catch (error) {
    res.status(404).json({ error: error.message, message: 'События не найдены!' });
  }
});
module.exports = router;
