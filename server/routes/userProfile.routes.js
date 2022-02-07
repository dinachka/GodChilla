const router = require('express').Router();
const { Op } = require('sequelize');

const { User, Friendship } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
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

  const userFrendshipStatus = await Friendship.findAll({
    where: {
      [Op.or]: [{ reqUserID: id }, { resUserID: id }],
    },
  });
  const data = {
    user: userInfo,
    friendship: userFrendshipStatus,
  };
  res.json(data);
});

module.exports = router;
