//here we create a user model which will contain the schema for the 
//'user' document in the database.
//the databases user schema is to include the data we retrieve from 
//logging in with a third party account
//Each service will provide us with slightly different information, 
//which we need to take into account when setting the user schema

var mongoose = require('mongoose');  //used to create MongoDB models in Node apps easily
var bcrypt   = require('bcrypt-nodejs');  //used to generate a secret hash of the users password

var userSchema = mongoose.Schema({  
  local: {
    name: String,
    email: String,
    password: String,
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,
    username: String,
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
});

userSchema.methods.generateHash = function(password) {  
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {  
  return bcrypt.compareSync(password, this.local.password);
};
module.exports = mongoose.model('User', userSchema);  
