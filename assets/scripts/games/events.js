'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onCreateNewGame = function(event) {
  event.preventDefault();
  api.createNewGame()
  .done(ui.successNewGame)
  .fail(ui.failure)
}


const onShowAllGames = function(event) {
  event.preventDefault();
  api.index()
  .done(ui.successShowAllGames)
  .fail(ui.failure);
}

const onShowGame = function(event){
  event.preventDefault();

  let data = $('#game-id').val();
  console.log('Show Game ' + data);
  api.showGame(data)
  .done(ui.successShowGame)
  .fail(ui.failure);
}

const onPlayerJoin = function (event) {
  event.preventDefault();
  api.playerJoin()
  .done(ui.successPlayerJoin)
  .fail(ui.failure);
}


const addHandlers = () => {
  $('#new-game').on('submit', onCreateNewGame);
  $('#show-games').on('submit', onShowAllGames);
  $('#show-game').on('submit', onShowGame);
  $('#new-player').on('submit', onPlayerJoin);
};

module.exports = {
  addHandlers,
};
