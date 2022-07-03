const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/tasks', (req, res) => {
  res.send({ msg: 'task' })
});

module.exports = app => app.use('/api', router);
