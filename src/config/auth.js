require('dotenv').config();

const secret_hash = process.env.SECRET_HASH;

module.exports = secret_hash;
