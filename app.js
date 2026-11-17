
const express = require('express');
const routes = require('./routes/index');
const path = require('path');
// const bodyParser = require('body-parser');

const app = express();
app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(bodyParser.urlencoded({ extended: false }));


module.exports = app;
