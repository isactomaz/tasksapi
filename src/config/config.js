require('dotenv').config();

module.exports = {
  'development': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME_DEVELOPMENT,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT,
    'port': process.env.DB_PORT,
    'operatorsAliases': 0,
  },
  'test': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME_TEST,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT,
    'port': process.env.DB_PORT,
    'operatorsAliases': 0,
  },
  'production': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME_PRODUCTION,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT,
    'port': process.env.DB_PORT,
    'operatorsAliases': 0,
  },
};
