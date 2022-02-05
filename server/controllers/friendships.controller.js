const { Op } = require('sequelize');
const { User, Friendship } = require('../db/models');

// создаем запись в БД с запросом на дружбу
const createFriendship = async (req, res) => {
  const {
    reqUserID, resUserID,
  } = req.body;

  try {
    await Friendship.create({
      reqUserID, resUserID, status: 'success',
    });
    const friendships = await Friendship.findAll({
      order: [['updatedAt', 'DESC']],
    });
    res.status(200).json(friendships);
  } catch (error) {
    res.status(404).json({ error });
  }
};

// вынимаем из БД спиок друзей
const currentFriendships = async () => {
  const userid = 2;
  try {
    const friends = await Friendship.findAll({
      raw: true,
      order: [['updatedAt', 'DESC']],
      attributes: ['reqUserID', 'resUserID'],
      where: {
        [Op.or]: [{ reqUserID: userid }, { resUserID: userid }],
        status: 'Подтвержден',
      },
      // include: {
      //   model: User,
      // },
    });
    const formatedFriends = friends.map((el) => {
      if (el.reqUserID !== userid) {
        return +el.reqUserID;
      }
      return +el.resUserID;
    });

    const friendships = await User.findAll({
      raw: true,
      where: {
        id: formatedFriends,
      },
    });
    // res.status(200).json(friendships);
    console.log(friendships);
  } catch (error) {
    // res.status(404).json({ error: 'error' });
  }
};
currentFriendships();
// меняем статус дружбы на "подтвержден"
const friendshipAccepted = async (req, res) => {
  // const {
  //   id,
  // } = req.body;
  try {
    const acceptedFriendship = await Friendship.update(
      { status: 'Подтвержден' },
      { where: { id } },
    );
    res.status(200).json(acceptedFriendship);
  } catch (error) {
    console.log('error');
    // res.status(404).json({ error: 'error' });
  }
};
friendshipAccepted();
// удаляем запись дружбы из БД
const deleteFriendship = async (req, res) => {
  const {
    reqUserID, resUserID,
  } = req.body;
  try {
    await Friendship.destroy({
      where: {
        reqUserID, resUserID,
      },
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};
module.exports = {
  currentFriendships, createFriendship, deleteFriendship, friendshipAccepted,
};
