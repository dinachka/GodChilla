const router = require('express').Router();
const {
  rejectFriendship, createFriendship, currentFriendships, friendshipAccepted,
  friendshipRequestsNotifications, deleteFriendship,
} = require('../controllers/friendships.controller');

// создание дружбы на собственной странице в поисковике
router.post('/', createFriendship);

// // создание дружбы на странице юзера
// router.post('/profile/:id', createFriendship);

// принять заявку добавления друзей
router.put('/', friendshipAccepted);

// отклонение заявки добавления в друзья
router.delete('/', rejectFriendship);

// расторжение дружбы на странице юзера
router.delete('/:id', deleteFriendship);

// список друзей конкретного юзера
router.get('/:id', currentFriendships);

// список уведомлений о запросе добавленияя в друзья
router.get('/', friendshipRequestsNotifications);

module.exports = router;
