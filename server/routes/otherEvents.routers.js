const router = require('express').Router();
const { Op } = require('sequelize');
const {
  Event, User, Friendship, Participation,
} = require('../db/models');

router.get('/', async (req, res) => {
  const now = (new Date()).toISOString();
  const otherEvents = await Event.findAll({
    where: {
      userID: {
        [Op.ne]: req.session.user.id,
      },
      dateTime: { [Op.gte]: now },
      [Op.or]: [
        { privateSettings: 'public' },
        { privateSettings: 'forFriends' },
      ],
    },
    order: [['dateTime', 'ASC']],
    include: [{
      model: User,
    }],
  });
  const friends = await Friendship.findAll({
    raw: true,
    attributes: ['reqUserID', 'resUserID'],
    where: {
      [Op.or]: [{ reqUserID: req.session.user.id }, { resUserID: req.session.user.id }],
      status: 'Подтвержден',
    },
  });
  const friendsId = friends.map((el) => {
    if (el.reqUserID !== req.session.user.id) {
      return +el.reqUserID;
    }
    return +el.resUserID;
  });
  const participationsPadding = await Participation.findAll({
    raw: true,
    where: {
      userID: req.session.user.id,
      status: 'В обработке',
    },
    attributes: ['eventID'],
  });
  const participationsPaddingId = participationsPadding.map((el) => el.eventID);
  const participationsAccept = await Participation.findAll({
    raw: true,
    where: {
      userID: req.session.user.id,
      status: 'Подтвержден',
    },
    attributes: ['eventID'],
  });
  const participationsAcceptId = participationsAccept.map((el) => el.eventID);
  const cityFilter = otherEvents.filter((el) => (el.User.city === req.session.user.city));
  const friendEventFilter = cityFilter
    .filter((el) => ((el.privateSettings === 'forFriends') ? friendsId.includes(el.User.id) : true));
  const participateEventFilter = friendEventFilter
    .filter((el) => (participationsAcceptId.length
      ? (!participationsAcceptId.includes(+el.id)) : true));
  const editEventsFriendship = participateEventFilter
    .map((el) => (friendsId.includes(+el.User.id)
      ? {
        ...el.dataValues,
        User: {
          name: el.User.dataValues.name,
          lastName: el.User.dataValues.lastName,
          photo: el.User.dataValues.photo,
          id: el.User.dataValues.id,
          isFriend: true,
        },
      } : {
        ...el.dataValues,
        User: {
          name: el.User.dataValues.name,
          lastName: el.User.dataValues.lastName,
          photo: el.User.dataValues.photo,
          id: el.User.dataValues.id,
          isFriend: false,
        },
      }));
  const editEventsParticipate = editEventsFriendship
    .map((el) => (participationsPaddingId.length && participationsPaddingId.includes(+el.id)
      ? {
        ...el,
        status: 'В обработке',
      } : el));
  res.status(200).json({
    events: editEventsParticipate,
  });
});

router.post('/join', async (req, res) => {
  const eventID = +(req.body.eventID);
  const userID = +(req.session.user.id);
  try {
    const exsistParticipation = await Participation.findOne({
      where: {
        eventID,
        userID,
      },
    });
    if (exsistParticipation) {
      res.status(400).json({
        message: 'Запрос на участие уже создан',
      });
      return;
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  } try {
    const newParticipation = await Participation.create({
      eventID,
      userID,
      status: 'В обработке',
    });
    res.status(200).json({
      eventID: newParticipation.eventID,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.delete('/join/:id', async (req, res) => {
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

module.exports = router;
