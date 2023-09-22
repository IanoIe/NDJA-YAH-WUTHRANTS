

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var loginRouter = require('./routes/loginRoutes');

var registRouter = require('./routes/registarRoutes');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/auth', loginRouter);

app.use('/api/auth', registRouter);

module.exports = app;
