const { Op } = require('sequelize');
const { User, Message } = require('../db/models');

module.exports = class MessageService {
  async getMessages({ userId, friendId }) {
    const messages = await Message.findAll({
      where: {
        [Op.or]: {
          fromUserId: userId,
          toUserId: friendId,
        },
        [Op.or]: {
          fromUserId: friendId,
          toUserId: userId,
        },
      },
    });
    return messages;
  }
};
