'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api.js');
const ui = require('./ui.js');


const onCreateNewGame = function(event){
  event.preventDefault();
  console.log('New Game Button submitted');
  console.log(event)

  api.create()
  .done(ui.successNewGame)
  .fail(ui.failure)
}

const onShowGames = function(event){
  event.preventDefault();
  console.log('Show Game Button submitted');
  console.log(event)

  api.createNewGame()
  .done(ui.successNewGame)
  .fail(ui.failure)
}



const addHandlers = () => {
  $('#new-game').on('submit', onCreateNewGame);
  $('#see-game').on('submit', onShowGames);
};

module.exports = {
  addHandlers,
};
