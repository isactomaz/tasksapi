// create tables
(async () => {
  const db = require('../models/index');
  const User = require('../models/user')(db.sequelize, db.Sequelize.DataTypes);
  //const Task = require('../models/task')(db.sequelize, db.Sequelize.DataTypes);

  await db.sequelize.sync();
})();
