const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const database = require('../database/db');
const Task = require('../models/task');

const User = database.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 7);
      user.password = hashedPassword;
    },
  },
});

User.hasMany(Task);

module.exports = User;
