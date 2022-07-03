const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret_hash = require('../config/auth');
const db = require('../models/index');

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, secret_hash, {
    expiresIn: 60 * 60 * 24, // 24h
  });
}

router.post('/register', async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  if (!(login && password)) {
    return res.status(400).send({ error: 'Invalid login or password' });

  }
  if (await db.user.findOne({ where: { login: login } })) {
    return res.status(400).send({ error: 'Login already used' });
  }

  return db.user.create({
    login: login,
    password: password,
  })
    .then((user) => {
      user.password = undefined;
      res.status(201).send({
        user, token: generateToken({ id: user.id })
      });
    })
    .catch((_) => res.status(400).send({ error: 'Registration falied' }));
});

router.post('/authenticate', async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  const user = await db.user.findOne({ where: { login: login } })
  if (!user) {
    return res.status(400).send({ error: 'Incorrect login credentials' });
  }

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: 'Incorrect login credentials' });
  }

  user.password = undefined;
  res.send({
    user, token: generateToken({ id: user.id })
  });
});

module.exports = (app) => app.use('/auth', router);
