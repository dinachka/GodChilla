const { Op } = require('sequelize');
const { User, Friendship } = require('../db/models');

const allFriendships = async (req, res) => {
  try {
    const friendships = await Friendship.findAll({
      order: [['updatedAt', 'DESC']],
      where: {
        [Op.or]: [{ status: 'В обработке' }, { status: 'Подтвежден' }],
      },
    });
    res.status(200).json(friendships);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const acceptedFriendships = async (req, res) => {
  try {
    const friendships = await Friendship.findAll({
      order: [['updatedAt', 'DESC']],
      where: {
        [Op.or]: [{ status: 'Подтвежден' }],
      },
    });
    res.status(200).json(friendships);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const createFriendship = async (req, res) => {
  const {
    reqUserID, resUserID,
  } = req.body;

  try {
    await Friendship.create({
      reqUserID, resUserID,

    });
    const friendships = await Friendship.findAll({
      order: [['updatedAt', 'DESC']],
    });
    res.status(200).json(friendships);
  } catch (error) {
    res.status(404).json({ error });
  }
};

const deleteFriendship = async (req, res) => {
  const {
    reqUserID, resUserID,
  } = req.body;
  try {
    await Friendship.destroy({
      reqUserID, resUserID,

    });
  } catch (error) {
    res.status(404).json({ error });
  }
};
module.exports = {
  allFriendships, acceptedFriendships, createFriendship, deleteFriendship,
};
