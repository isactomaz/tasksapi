const { DataTypes } = require('sequelize');
const database = require('../database/db');

const Task = database.define('task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(79),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
});

module.exports = Task;
