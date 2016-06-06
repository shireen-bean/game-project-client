'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onToggleSignUp = function(event){
  event.preventDefault();
  $('#sign-in-modal').modal('hide');
  $('#sign-up-modal').modal('show');
};

const onToggleSignIn = function(event){
  event.preventDefault();
  $('#sign-up-modal').modal('hide');
  $('#sign-in-modal').modal('show');
};

const signUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let name = $("#sign-up input[name='credentials[email]']").val();
  let pass = $("#sign-up input[name='credentials[password]']").val();
  $("#sign-in input[name='credentials[email]']").val(name);
  $("#sign-in input[name='credentials[password]']").val(pass);
  api.signUp(data)
  //.then(api.signIn({'credentials[email]':name, 'credentials[password]':pass}))
  .done(ui.signUpSuccess)
  .fail(ui.failure);
};

const signIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const signOut = function (event) {
  event.preventDefault();

  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure);
};


const addHandlers = () => {
  $('#sign-in-modal').modal('show');
  $('#change-password-button').on('click', function(){$('#change-password-modal').modal('show');});
  //$('#getGame-modal-button').on('click', function(){$('#getGame-modal').modal('show');});
  //$('#user-button').on('click', signOut);
  $('#toggle-sign-up').on('click',onToggleSignUp);
  $('#toggle-sign-in').on('click',onToggleSignIn);
  $('#launch-modal').on('click', function(){$('#sign-in-modal').modal('show');});

  $('#sign-up').on('submit', signUp);
  $('#sign-in').on('submit', signIn);
  $('#sign-out-button').on('click', signOut);
  $('#change-password').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};

// function (event) {
//   let data = getFormFields(this);
//   event.preventDefault();
//   authApi.signUp(authUi.success, authUi.failure, data);
// });
