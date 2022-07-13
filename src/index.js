const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

require('./controllers/auth.controller')(app);
require('./controllers/task.controller')(app);

app.listen(port, () => console.log(`App listening on port ${port}!`));
