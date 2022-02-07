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
  const formatedFriends = friends.map((el) => {
    if (el.reqUserID !== req.session.user.id) {
      return +el.reqUserID;
    }
    return +el.resUserID;
  });
  res.status(200).json({
    events: otherEvents.filter((el) => el.User.city === req.session.user.city),
    friendsId: formatedFriends,
  });
});

module.exports = router;
