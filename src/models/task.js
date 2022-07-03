module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
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
      allowNull: false,
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
  },
    {
      freezeTableName: true,
      tableName: 'tasks',
    }
  );

  return Task;
};
