const router = require('express').Router();
const { Op } = require('sequelize');
const { Event, User } = require('../db/models');

router.get('/:id', async (req, res) => {
  const now = (new Date()).toISOString();
  const { id } = req.params;

  try {
    const publicEvents = await Event.findAll({
      raw: true,
      where: {
        userID: id,
        privateSettings: 'public',
        dateTime: { [Op.gte]: now },
      },
      include: [{
        model: User,
      }],
    });
    console.log(publicEvents);
    const forFriendsEvents = await Event.findAll({
      raw: true,
      where: {
        userID: id,
        privateSettings: 'forFriends',
        dateTime: { [Op.gte]: now },
      },
      include: [{
        model: User,
      }],
    });
    res.status(200).json({ publicEvents, forFriendsEvents });
  } catch (error) {
    res.status(404).json({ error: error.message, message: 'События не найдены!' });
  }
});

module.exports = router;
