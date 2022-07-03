(async () => {
  const database = require('../database/db');
  const User = require('../models/user');
  await database.sync();
})();
