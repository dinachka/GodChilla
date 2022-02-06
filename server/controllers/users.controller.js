const { Op } = require('sequelize');
const { User } = require('../db/models');

const allUsers = async (req, res) => {
  const currentUserId = +req.params.id;
  console.log(+req.params.id);
  // console.log(+req.session.user.id);
  try {
    const users = await User.findAll({
      raw: true,
      order: [['updatedAt', 'DESC']],
      where: {
        id: {
          [Op.ne]: currentUserId,
        },
      },
    });
    res.status(200).json({ users });
    console.log(users);
    // res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log('err');
  }
};

module.exports = {
  allUsers,
};
