const jwt = require('jsonwebtoken');

const secret_hash = require('../config/auth');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' })
  }

  const parts = authHeader.split(' ');
  if (!parts.length === 2) {
    return res.status(401).send({ error: 'Token error' })
  }

  const scheme = parts[0];
  const token = parts[1];
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Invalid token' })
  }

  jwt.verify(token, secret_hash, (error, decoded) => {
    if (error) {
      return res.status(401).send({ error: 'Invalid token' });
    }

    req.userId = decoded.id;
    return next();
  });
};
