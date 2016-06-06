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
  $('#sign-up').find("input[name='credentials[email]']").val('');
  $('#sign-up').find("input[name='credentials[password]']").val('');
  $('#sign-up').find("input[name='credentials[password_confirmation]']").val('');
  $('#sign-up-modal').modal('hide');
  $('#sign-in-modal').modal('show');
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
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signInFail,
};
