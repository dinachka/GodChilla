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
      },
      raw: true,
      include:
          { all: true },
    });
    res.status(200).json({ participations });
  } catch (error) {
    res.status(404).json({ error });
  }
});

router.put('/acceptEventRequest', async (req, res) => {
  const { id } = req.session.user;
  try {
    const acceptedEventRequest = await Participation.update(
      { status: 'Подтвержден' },
      { where: { resUserID: +id } },
    );
    res.status(200).json(acceptedEventRequest);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/rejectEventRequest', async (req, res) => {
  const { id } = req.session.user;
  try {
    const rejectedEvent = await Participation.destroy({
      where: {
        resUserID: +id,
      },
    });
    res.status(200).json(rejectedEvent);
  } catch (error) {
    res.status(404).json({ error });
  }
});

module.exports = router;
