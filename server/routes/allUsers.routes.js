const router = require('express').Router();
const { allUsers } = require('../controllers/users.controller');

// GET запрос всех юзеров для search bar'a
router.get('/', allUsers);

module.exports = router;
