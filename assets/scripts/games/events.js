'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('../../games/api.js');
const ui = require('../../games/ui.js');


const onCreateNewGame = function(event){
  event.preventDefault();
  console.log('New Game Button submitted');
  console.log(event)

  api.createNewGame()
  .done(ui.successNewGame)
  .fail(ui.failure)
}


const addHandlers = () => {
  $('#new-game').on('submit', onCreateNewGame);

};

module.exports = {
  addHandlers,
};
