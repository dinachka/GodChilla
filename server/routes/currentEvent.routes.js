const router = require('express').Router();
const { Event, Category } = require('../db/models');

router.get('/:id', async (req, res) => {
  const eventId = req.params.id;
  const eventToEdit = await Event.findOne({
    where: {
      id: eventId,
    },
  });
  const partyExists = eventToEdit;

  // const currentCategory = await Category.findOne({
  //   raw: true,
  //   where: {
  //     id: eventToEdit.categoryID,
  //   },
  // });
  // console.log(currentCategory.title, 'currentCategory');
  res.status(200).json('editEvent', { party: eventToEdit, partyExists });
});

router.put('/:id', async (req, res) => {
  const {
    eventID,
    title,
    description,
    privateSettings,
    location,
    dateTime,
    photo,
    userID,
    categoryID,
  } = req.body;

  const partyToEdit = await Event.findOne({
    where: {
      id: eventID,
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
  partyToEdit.userID = userID;
  partyToEdit.categoryID = categoryID;
  partyToEdit.save();
  return res.status(200).json({
    updated: partyToEdit,
    message: 'Изменения записаны!',
  });
});

router.post('/', async (req, res) => {
  const {
    userID,
    categoryID,
    title,
    description,
    privateSettings,
    location,
    dateTime,
    photo,
  } = req.body;

  const newEvent = await Event.create({
    userID,
    categoryID,
    title,
    description,
    privateSettings,
    location,
    dateTime,
    photo,
  });

  if (newEvent) {
    res.status(200).json({
      newEvent,
      message: 'Событие создано, пригласите друзей!',
    });
  } else {
    res.json(400).json({
      message: 'Событие не создано, что-то пошло не так!',
    });
  }
});

router.delete('/:id', async (req, res) => {
  const eventId = req.params.id;
  console.log(eventId);
  try {
    const deleted = await Event.destroy({
      where: {
        id: +eventId,
      },
    });
    if (deleted) {
      res.status(200).json({
        id: eventId,
        message: 'Событие удалилось успешно, создайте новое!',
      });
    } else {
      res.status(400).json({
        message: 'Событие не удалилось, попробуйте снова!',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Что-то пошло не так, попробуйте снова!',
      error: error.message,
    });
  }
});

module.exports = router;
