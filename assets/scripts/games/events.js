'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const logic = require('./logic.js');

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

const onAddMove = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);

  api.addMove(data)
  .done(ui.successAddMove)
  .fail(ui.failure);
}

const onMoveHere = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.addMove(data)
  .done(ui.successUpdateBoard)
  .fail(ui.failure);
}




const addHandlers = () => {
  $('#new-game').on('submit', onCreateNewGame);
  $('#show-games').on('submit', onShowAllGames);
  $('#show-game').on('submit', onShowGame);
  $('#new-player').on('submit', onPlayerJoin);
  $('#add-move').on('submit', onAddMove);


  //game board click handlers
  $('#index0').on('submit', onMoveHere);
  $('#index1').on('submit', onMoveHere);
  $('#index2').on('submit', onMoveHere);
  $('#index3').on('submit', onMoveHere);
  $('#index4').on('submit', onMoveHere);
  $('#index5').on('submit', onMoveHere);
  $('#index6').on('submit', onMoveHere);
  $('#index7').on('submit', onMoveHere);
  $('#index8').on('submit', onMoveHere);


};

module.exports = {
  addHandlers,
};
