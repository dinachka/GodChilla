const router = require('express').Router();
const { Op } = require('sequelize');

const { User, Friendship } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const loginId = req.session.user.id;
  const userInfo = await User.findOne({
    raw: true,
    where: {
      id,
    },
    attributes: {
      exclude: [
        'password', 'createdAt', 'updatedAt', 'email', 'phoneNumber',
      ],
    },
  });

  try {
    const [userFriendshipStatus] = await Friendship.findAll({
      raw: true,
      order: [['updatedAt', 'DESC']],
      attributes: ['reqUserID', 'resUserID', 'status'],
      where: {
        [Op.or]: [{ reqUserID: id, resUserID: loginId }, { reqUserID: loginId, resUserID: id }],
      },
    });
    if (userFriendshipStatus.length === 0) {
      res.json({ status: 'Не друзья', info: userInfo });
    }
    res.json({ info: userInfo, friendship: userFriendshipStatus.status });
  } catch (error) {
    res.json({ friendship: 'Не друзья', info: userInfo });
  }
});

module.exports = router;
