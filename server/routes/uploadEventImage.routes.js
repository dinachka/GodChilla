const router = require('express').Router();
const eventsImageMiddleware = require('../middlewares/eventsImageMiddleware')
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  res.send('hello events');
})
// .put('/:id', (req, res) => {

// })

module.exports = router;
