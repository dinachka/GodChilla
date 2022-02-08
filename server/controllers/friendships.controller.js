const { Op } = require('sequelize');
const {
  User, Friendship, Participation, Event,
} = require('../db/models');

// создаем запись в БД с запросом на дружбу
const createFriendship = async (req, res) => {
  const {
    reqUserID, resUserID,
  } = req.body;
  try {
    await Friendship.create({
      reqUserID, resUserID, status: 'В обработке',
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

const currentFriendships = async (req, res) => {
  const userid = +req.params.id;
  // const userid = 2;
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
      // include: {
      //   model: User,
      // },
    });
    res.status(200).json(friendships);
  } catch (error) {
    res.status(404).json({ error: 'error1111' });
  }
};
// меняем статус дружбы на "подтвержден"
const friendshipAccepted = async (req, res) => {
  const { id } = req.session.user;
  console.log(JSON.stringify(req.session), id);
  try {
    const acceptedFriendship = await Friendship.update(
      { status: 'Подтвержден' },
      { where: { resUserID: +id } },
    );
    res.status(200).json(acceptedFriendship);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
// удаляем (отклоняем запрос) запись дружбы из БД
const rejectFriendship = async (req, res) => {
  const { id } = req.session.user;
  try {
    const rejected = await Friendship.destroy({
      where: {
        resUserID: +id,
      },
    });
    res.status(200).json(rejected);
  } catch (error) {
    res.status(404).json({ error });
  }
};
// выводим все заявки на добавление в друзья конкретному юзеру
const friendshipRequestsNotifications = async (req, res) => {
  const id = +req.session.user.id;
  try {
    const requestedFriendships = await Friendship.findAll({
      raw: true,
      include: {
        model: User,
        // where: {
        //   id: 3,
        // },
      },
      order: [['updatedAt', 'DESC']],
      where: {
        resUserID: id,
      },
    });
    const formatedFriends = requestedFriendships.map((el) => {
      if (el.reqUserID !== id) {
        return +el.reqUserID;
      }
      return +el.resUserID;
    });
    const friends = await User.findAll({
      raw: true,
      where: {
        id: formatedFriends,
      },
      // include: {
      //   model: User,
      // },
    });
    res.status(200).json(friends);
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = {
  currentFriendships,
  createFriendship,
  rejectFriendship,
  friendshipAccepted,
  friendshipRequestsNotifications,
};
