const router = require('express').Router();
const { Event } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const publicEvents = await Event.findAll({
      raw: true,
      where: {
        userID: id,
        privateSettings: 'public',
      },
    });

    const forFriendsEvents = await Event.findAll({
      raw: true,
      where: {
        userID: id,
        privateSettings: 'forFriends',
      },
    });
    res.status(200).json({ publicEvents, forFriendsEvents });
  } catch (error) {
    res.status(404).json({ error: error.message, message: 'События не найдены!' });
  }
});

module.exports = router;
