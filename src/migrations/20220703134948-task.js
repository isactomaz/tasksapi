'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING(79),
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: false,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            shema: 'shema',
          },
          key: 'id',
        },
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
