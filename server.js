/* eslint no-console: off */

require('dotenv').config();
require('./lib/mongodb');
const app = require('./lib/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server running on port:', PORT);
});