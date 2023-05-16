var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var planCampusRouter = require('./routes/plan-campus');
var rallyeRouter = require('./routes/rallye');
var vosReponsesRouter = require('./routes/vos-reponses');
var ralFr12Router = require('./routes/ral-fr12');
var ralFr34Router = require('./routes/ral-fr34');
var ralFr56Router = require('./routes/ral-fr56');
var ralFr78Router = require('./routes/ral-fr78');
var submitRal12Router = require('./routes/submit-ral-fr12');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // was set to false but i switched it to true to try smth !
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', planCampusRouter);
app.use('/', rallyeRouter);
app.use('/', vosReponsesRouter);
app.use('/', ralFr12Router);
app.use('/', ralFr34Router);
app.use('/', ralFr56Router);
app.use('/', ralFr78Router);
app.use('/', submitRal12Router);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
