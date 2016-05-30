'use strict';

const app = require('../app.js')

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
console.log(error);
};

const signInSuccess = function(data){
  app.user = data.user;
  console.log(app)
  console.log('app.user is '+app.user)
}

const signOutSuccess= function(){
  app.user = null;
  console.log('User Successfully signed out')
}

const changePasswordSuccess = function(data){
  console.log('Password change successful')
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
