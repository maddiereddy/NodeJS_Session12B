//store the credentials we need for logging in with the three accounts

module.exports = {  
  facebookAuth: {
    clientID: '401548803549374',
    clientSecret: '2cd1a6fab14e27ccfe1492c7720058f3',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
  },
  twitterAuth: {
    consumerKey: '5Tc3htuFtDjJCf8Z7GeNJKD7C',
    consumerSecret: 'iHTgoAhntVGaWGJ2o089B80SsIkelgujpLbI8elHmkUwWzGrFg',
    callbackURL: 'http://localhost:3000/auth/twitter/callback',
  },
  googleAuth: {
    clientID: '9514686917-e50u32u4q64kf6tsco999hi4der3l6nr.apps.googleusercontent.com',
    clientSecret: 'ZYWrKaaylcIGeO7lSaXNfQNC',
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
};


/*
Facebook Developer API
So let's start with the Facebook API. Navigate to https://developers.facebook.com/apps/ and 
click 'Add a New App'. You will need a registered Facebook account for this. 
You should then be presented with a list of app platforms, select 'website'.

fb-api

Next you will be asked to name your app, and then to select a category as well. 
Facebook will then present you with a quick start tutorial, 
but for now we can skip this by clicking the 'Skip Quick Start' button.

The next screen will present you with the credentials we need, 
so simply copy the relevant data into our config/auth.js file.

Twitter Developer API
The Twitter API is a little different. To be able to use it, 
you need to make sure your mobile number is registered to your Twitter account. 
To start, simply navigate to https://apps.twitter.com/ and click 'Create New App'.

twitter-api

You will be presented with a form, asking you to prove the name of your app, 
a simple description and the application's website. 
You can simply set a placeholder here, or even just your personal domain. 
You can also set the callback URL, which we've set in our config file to be http://localhost:3000/auth/twitter/callback. 
Twitter may have a problem with this callback URL, in which case you can simply use http://127.0.0.1:3000/auth/twitter/callback.

When you have completed the form, agree to the terms of use and submit your application.
You should be displayed with the information relevant to your app. 
To find our Twitter consumer key and secret, click on the 'Keys and Access Tokens' tab, 
and copy them across to the config file to complete this section.

Google Developer API
So, last API to configure, Google. Navigate to https://console.developers.google.com/project 
and click the 'Create Project' button. Again, you will need a Google account to do so.

google-api

You will then be asked to name your project, and be redirected to the API dashboard. 
To find your credentials, click 'Enable and Manage APIs' and scroll down to the 'Google+ API'. 
Click 'Enable', navigate to 'Credentials' in the side bar and add 'OAuth 2.0 client ID'. 
Here you will be able to configure the screen users will be presented with as they log in, 
and find the credentials to copy over to the code.

*/