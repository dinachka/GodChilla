const { Op } = require('sequelize');
const {
  User, Friendship, Participation, Event,
} = require('../db/models');

// создаем запись в БД с запросом на дружбу
const createFriendship = async (req, res) => {
  const { reqUserID, resUserID } = req.body;
  try {
    await Friendship.create({
      reqUserID,
      resUserID,
      status: 'В обработке',
    });
    const friendships = await Friendship.findAll({
      order: [['updatedAt', 'DESC']],
      where: {
        [Op.or]: [{ reqUserID }, { resUserID: reqUserID }],
      },
      attributes: ['resUserID', 'reqUserID', 'status'],
    });
    res.status(200).json(friendships);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};

// вынимаем из БД спиок друзей
const loadCurrentFriendships = async (userId) => {
  const friends = await Friendship.findAll({
    raw: true,
    order: [['updatedAt', 'DESC']],
    attributes: ['reqUserID', 'resUserID'],
    where: {
      [Op.or]: [{ reqUserID: userId }, { resUserID: userId }],
      status: 'Подтвержден',
    },
    // include: {
    //   model: User,
    // },
  });
  const formatedFriends = friends.map((el) => {
    if (el.reqUserID !== userId) {
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

  return friendships;
};

const currentFriendships = async (req, res) => {
  const userid = +req.params.id;
  try {
    const friendships = await loadCurrentFriendships(userid);
    res.status(200).json(friendships);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
// меняем статус дружбы на "подтвержден"
const friendshipAccepted = async (req, res) => {
  const { id } = req.session.user;
  const reqUserID = req.body.id;
  try {
    const acceptedFriendship = await Friendship.update(
      { status: 'Подтвержден' },
      { where: { resUserID: id, reqUserID } },
    );
    res.status(200).json(reqUserID);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
// удаляем (отклоняем запрос) запись дружбы из БД
const rejectFriendship = async (req, res) => {
  const { id } = req.session.user;
  const reqUserID = req.body.id;
  try {
    const rejected = await Friendship.destroy({
      where: {
        resUserID: +id,
        reqUserID,
      },
    });
    res.status(200).json(reqUserID);
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
      // include: {
      //   model: User,
      //   // where: {
      //   //   id: 3,
      //   // },
      // },
      order: [['updatedAt', 'DESC']],
      where: {
        resUserID: id,
      },
    });

    const filteredfriendship = requestedFriendships.filter(
      (el) => el.status === 'В обработке',
    );
    const formatedFriends = filteredfriendship.map((el) => {
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
      include: {
        model: Friendship,
        // where: {
        //   resUserID: id,
        // },
      },
    });
    res.status(200).json(friends);
  } catch (error) {
    res.status(404).json({ error });
  }
};

const deleteFriendship = async (req, res) => {
  const userID = +req.params.id;
  const currentUserID = +req.session.user.id;
  try {
    await Friendship.destroy({
      where: {
        [Op.or]: [
          { reqUserID: userID, resUserID: currentUserID },
          { resUserID: userID, reqUserID: currentUserID },
        ],
      },
    });
    res.status(200).json({ userID });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  currentFriendships,
  createFriendship,
  rejectFriendship,
  friendshipAccepted,
  friendshipRequestsNotifications,
  deleteFriendship,
};
