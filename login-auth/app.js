//listener is on localhost:3000
//mongodb collection used expressauth: one created if it does not exist
//created the app using express-generator with ejs templating
//server is implemented in the app.js
//this app creates a login/regisstration system for email/facebook/twitter/google logins
//can run this app by nodemon, or npm start or node app.js.
//need to have mongod running on another terminal window
//some variables already required by the express-generator, some routes are set, 
//the templating language is set and some error handlers are defined here

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var passport = require('passport');  //authentication middleware service
var LocalStrategy = require('passport-local').Strategy;  
var mongoose = require('mongoose');   //is a package that allows us to create MongoDB models in Node apps easily
var flash = require('connect-flash'); //used to store and display flash messages to the user 
var session = require('express-session'); //simple session middleware package for Express apps

 var configDB = require('./config/db.js');
 mongoose.connect(configDB.url);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var sess = {
  secret: 'shhsecret',
  //store: sessionStore,  //connect-mongo session store
  resave: false,
  saveUninitialized: true,
  cookie: {}
};
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy 
  sess.cookie.secure = true // serve secure cookies 
}
 
app.use(session(sess));

//app.use(session({ secret: 'shhsecret' }));  
app.use(passport.initialize());  
app.use(passport.session());  
app.use(flash());

app.use('/', index);  
app.use('/users', users);

require('./config/passport')(passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
