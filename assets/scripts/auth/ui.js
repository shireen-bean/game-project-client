'use strict';

const app = require('../app.js');

const success = function(data) {
  //console.log(data);
};

const failure = function (error) {
  console.log(error);
};

const signInSuccess = function(data){
  app.user = data.user;
  $('#sign-in-modal').modal('hide');
};

const signInFail = function(){
  $('#sign-in-modal').effect('shake');
};

const signUpSuccess = function(data) {
  app.user = data.user;
  $('#sign-up-modal').modal('hide');
};

const signOutSuccess= function(){
  app.user = null;
  $('#sign-in-modal').modal('show');
};

const changePasswordSuccess = function() {
  $('#change-password-modal').modal('hide');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signInFail,
};
