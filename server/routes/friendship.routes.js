const router = require('express').Router();
const {
  deleteFriendship, createFriendship, currentFriendships, friendshipAccepted,
} = require('../controllers/friendships.controller');

// создание дружбы на собственной странице в поисковике
router.post('/profile/:id', createFriendship);

// создание дружбы на странице юзера
router.post('/profile/:id', createFriendship);

// расторжение дружбы на собственной странице в поисковике
router.delete('/profile/:id', deleteFriendship);

// расторжение дружбы на странице юзера
router.delete('/profile/:id', deleteFriendship);

// список друзей конкретного юзера
router.get('/api/profile/2', currentFriendships);



// принять заявку добавления друзей
router.put('/profile/:id', friendshipAccepted);

module.exports = router;
