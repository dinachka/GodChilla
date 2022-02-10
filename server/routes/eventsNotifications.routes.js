const router = require('express').Router();
const { Op } = require('sequelize');
const {
  User, Friendship, Participation, Event,
} = require('../db/models');

router.get('/getEventRequest', async (req, res) => {
  try {
    const { id } = req.session.user;
    // все ивенты юзера
    const myevents = await Event.findAll({
      raw: true,
      where: {
        userID: +id,
      },
    });
    const eventsIds = myevents.map((el) => el.id);

    const participations = await Participation.findAll({
      where: {
        eventID: { [Op.or]: eventsIds },
        status: 'В обработке',
      },
      raw: true,
      include:
          { all: true },
    });
    res.status(200).json(participations);
  } catch (error) {
    res.status(404).json({ error });
  }
});

router.put('/acceptEventRequest', async (req, res) => {
  const { id } = req.session.user;
  const { userID } = req.body;
  const { eventID } = req.body;
  try {
    const acceptedEventRequest = await Participation.update(
      { status: 'Подтвержден' },
      { where: { userID, eventID } },
    );
    res.status(200).json(userID);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/rejectEventRequest', async (req, res) => {
  const { id } = req.session.user;
  const { userID } = req.body;
  const { eventID } = req.body;
  try {
    const rejectedEvent = await Participation.destroy({
      where: {
        userID,
        eventID,
      },
    });
    res.status(200).json(userID);
  } catch (error) {
    res.status(404).json({ error });
  }
});

module.exports = router;
