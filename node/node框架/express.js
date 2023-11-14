const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(3000, () => console.log('server is running in 3000'));