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
  $('#sign-in-modal').modal('hide');
  console.log(app)
  console.log('app.user is '+app.user)
}

const signInFail = function(){
  $('#sign-in-modal').effect('shake');
}

const signUpSuccess = function(data){
  app.user = data.user;
  $('#sign-up-modal').modal('hide');
  console.log(app)
  console.log('app.user is '+app.user)
}

const signOutSuccess= function(){
  app.user = null;
  $('#sign-in-modal').modal('show');
  console.log('User Successfully signed out')
}

const changePasswordSuccess = function(data){
  console.log('Password change successful')
  $('#change-password-modal').modal('hide');
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signInFail,
};
