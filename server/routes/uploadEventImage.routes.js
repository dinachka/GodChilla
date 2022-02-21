const router = require('express').Router();
const eventsImageMiddleware = require('../middlewares/eventsImageMiddleware');
const { Event } = require('../db/models');

router.post('/', eventsImageMiddleware.single('eventImage'), async (req, res) => {
  const eventImagePath = `http://localhost:4000/${req.file.path}`;
  res.json(eventImagePath);
});

// /api/profile/uploadEventImage/
router.put('/:eventId', eventsImageMiddleware.single('eventImage'), async (req, res) => {
  try {
    await Event.update(
      { photo: `http://localhost:4000/${req.file.path}` },
      {
        where: {
          id: req.params.eventId,
        },
      },
    );
    const updatedImg = await Event.findOne({
      where: {
        id: req.params.id,
      },
      raw: true,
    });
    res.status(200).json({ photoURL: updatedImg.photo });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
})

module.exports = router;
