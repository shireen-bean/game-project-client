'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const signUp = function (event) {
  event.preventDefault();
  console.log("Sign Up Form Submitted")
  console.log(event)
  console.log(event.target)
  let data = getFormFields(event.target)
  api.signUp(data)
  //.done(ui.success)
  //.fail(ui.failure);
}

const signIn = function (event) {
  event.preventDefault();
  console.log("Sign In Form Submitted")
  console.log(event.target)
  let data = getFormFields(event.target)
  console.log('data is '+data)
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
}

const signOut = function (event) {
  event.preventDefault();
  console.log('Sign Out form submitted')

  api.signOut()
  .done(ui.sucess)
  .fail(ui.failure)
}

const onChangePassword = function(event){
  event.preventDefault();
  console.log('Change password submitted')
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure)
}


const addHandlers = () => {
  $('#sign-up').on('submit', signUp);
  $('#sign-in').on('submit', signIn);
  $('#sign-out').on('submit', signOut);
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
