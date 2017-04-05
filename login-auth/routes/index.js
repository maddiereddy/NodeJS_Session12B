var express = require('express');  
var passport = require('passport');  
var router = express.Router();

//In this file we are setting up the router to specify the views 
//that should be displayed at the specified route

router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {  
  res.render('login.ejs', { message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {  
  res.render('signup.ejs', { message: req.flash('signupMessage') });
});

//the profile.ejs requires the isLoggedIn variable to be true in order 
//for this view to be rendered. The isLoggedIn() function will set this 
//value to true if the user is authenticated.

router.get('/profile', isLoggedIn, function(req, res) {  
  res.render('profile.ejs', { user: req.user });
});

router.get('/logout', function(req, res) {  
  req.logout();
  res.redirect('/');
});


// two post routes to allow the user to enter their credentials to our form
router.post('/signup', passport.authenticate('local-signup', {  
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {  
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
}));

//This simple Express code will use the Passport Facebook strategy to authenticate a user, 
//and then redirect them, using the callback URL to the profile view. 
//The routing for Twitter and Google is basically the same

// Facebook routes
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {  
  successRedirect: '/profile',
  failureRedirect: '/',
}));

// Twitter routes
router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {  
  successRedirect: '/profile',
  failureRedirect: '/',
}));

// Google routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', {  
  successRedirect: '/profile',
  failureRedirect: '/',
}));

module.exports = router;

function isLoggedIn(req, res, next) {  
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}