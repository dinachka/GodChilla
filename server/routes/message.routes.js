const messageController = require('../controllers/message.controller');

const router = require('express').Router();

router.get('/', messageController.getMessages);

module.exports = router;
