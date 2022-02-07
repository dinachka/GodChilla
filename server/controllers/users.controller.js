const { Op } = require('sequelize');
const { User } = require('../db/models');

const allUsers = async (req, res) => {
  let currentUserInput = req.params.word;
  const currentUserId = +req.session.user.id;
  currentUserInput = currentUserInput[0].toUpperCase() + currentUserInput.slice(1);
  try {
    const users = await User.findAll({
      raw: true,
      order: [['updatedAt', 'DESC']],
      where: {
        id: {
          [Op.ne]: currentUserId,
        },
        name: {
          [Op.startsWith]: currentUserInput,
        },
      },
    });
    res.status(200).json({ users });
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = {
  allUsers,
};
