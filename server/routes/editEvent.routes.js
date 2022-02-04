const router = require('express').Router();
const { Event } = require('../db/models');

router.put('/api/:id', async (req, res) => {
  const eventId = req.params.id;
  const {
    title,
    description,
    privateSettings,
    location,
    dateTime,
    photo,
  } = req.body;

  const partyToEdit = await Event.findOne({
    where: {
      id: eventId,
    },
  });

  if (!title || !privateSettings || !location || !dateTime) {
    return res.status(400).json({ message: 'Эти поля не могут быть пустыми!', status: false });
  }
  partyToEdit.title = title;
  partyToEdit.description = description;
  partyToEdit.privateSettings = privateSettings;
  partyToEdit.location = location;
  partyToEdit.dateTime = dateTime;
  partyToEdit.photo = photo;
  partyToEdit.save();
  return res.status(200).json({
    message: 'Изменения записаны!',
  });
});

module.exports = router;
