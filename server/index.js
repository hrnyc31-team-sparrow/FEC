const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const compression = require('compression');

app.use(compression());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log('Crisp app listening on port ', port));