//require('dotenv').config({ path: '../../.env' });
require('dotenv').config({ path: '.env' });

const secret_hash = process.env.SECRET_HASH;

module.exports = secret_hash;
