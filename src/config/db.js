(async () => {
  const database = require('../database/db');
  const User = require('../models/user');
  const Task = require('../models/task');
  await database.sync();
})();
