// const router = require('express').Router();
// const { Event } = require('../db/models');

// router.delete('/:id', async (req, res) => {
//   const eventId = req.params.id;
//   try {
//     const deleted = await Event.destroy({
//       where: {
//         id: eventId,
//       },
//     });
//     if (deleted) {
//       res.status(200).json({
//         message: 'Событие удалилось успешно, создайте новое!',
//       });
//     } else {
//       res.status(400).json({
//         message: 'Событие не удалилось, попробуйте снова!',
//       });
//     }
//   } catch {
//     res.status(400).json({
//       message: 'Что-то пошло не так, попробуйте снова!',
//     });
//   }
// });

// module.exports = router;
