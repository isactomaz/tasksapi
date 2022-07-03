const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  if (!(login && password)) {
    return res.status(400).send({ error: 'Invalid login or password' });

  }
  if (await User.findOne({ where: { login: login } })) {
    return res.status(400).send({ error: 'User already exists' });
  }

  return User.create({
    login: login,
    password: password,
  })
    .then((user) => {
      user.password = undefined;
      res.status(201).send(user);
    })
    .catch((_) => res.status(400).send({ error: 'Registration falied' }));
});

module.exports = (app) => app.use('/auth', router);
