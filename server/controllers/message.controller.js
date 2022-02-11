const MessageService = require('../services/message.service');

class MessageController {
  service;

  constructor() {
    this.service = new MessageService();
  }

  getMessages = async (req, res) => {
    const userId = +req.session?.user?.id;
    const friendId = +req.params.friend;

    if (!userId || !friendId) {
      return res.status(400).send('Недостаточно аргументов');
    }

    const messages = await this.service.getMessages({ userId, friendId });

    return res.json({
      messages,
    });
  };
}

module.exports = new MessageController();
