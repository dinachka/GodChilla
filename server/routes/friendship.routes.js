const router = require('express').Router();
const { allFriendships, deleteFriendship, createFriendship } = require('../controllers/friendships.controller');

// Все дружбы
router.get('/', allFriendships);

router.get('/', createFriendship);

router.put('/', deleteFriendship);

module.exports = router;
