const router = require('express').Router();
const { Op } = require('sequelize');
const { Event, User, Friendship } = require('../db/models');

router.get('/', async (req, res) => {
  const otherEvents = await Event.findAll({
    where: {
      userID: {
        [Op.ne]: req.session.user.id,
      },
      [Op.or]: [
        { privateSettings: 'public' },
        { privateSettings: 'forFriends' },
      ],
    },
    order: [['updatedAt', 'DESC']],
    include: [{
      model: User,
    }],
  });
  const friends = await Friendship.findAll({
    raw: true,
    order: [['updatedAt', 'DESC']],
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
  const cityFilter = otherEvents.filter((el) => (el.User.city === req.session.user.city));
  const friendEventFilter = cityFilter
    .filter((el) => ((el.privateSettings === 'forFriends') ? friendsId.includes(el.User.id) : true));
  const editEvents = friendEventFilter
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
  res.status(200).json({
    events: editEvents,
  });
});
module.exports = router;
