'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

let currentMove = 1;


const onShowAllGames = function(event) {
  event.preventDefault();
  api.index()
  .done(ui.successShowAllGames)
  .fail(ui.failure);
};

const onShowStatistics = function(event){
  event.preventDefault();
  api.index()
  .done()
  .fail(ui.failure);
};

const onShowGame = function(event){
  event.preventDefault();
  let data = $('#game-id').val();
  api.showGame(data)
  .done(ui.successShowGame)
  .fail(ui.failure);
};

const onPlayerJoin = function (event) {
  event.preventDefault();
  let gameId = $('#game-id-join').val();
  api.playerJoin(gameId)
  .done(ui.successPlayerJoin)
  .fail(ui.failure);
};

const checkNextMove = function(currentMove){
  if (currentMove % 2 === 1) {
    return 'x';
  } else {
    return 'o';
  }
};

const onMoveHere = function(event) {
  event.preventDefault();
  let move = checkNextMove(currentMove);
  let gameId = $('.game-board').attr('value');
  $("input[name='game[cell][value]']").val(move);
  let data = getFormFields(event.target);

  let spot = event.target.id;

  api.addMove(data,gameId)
  .done(ui.successUpdateBoard)
  .fail(ui.failure);
  ui.addImage(spot,move);
  currentMove++;
};

const onCreateNewGame = function(event) {
  event.preventDefault();
  $('#new-game-modal').modal('hide');
  api.createNewGame()
  .done(ui.successNewGame)
  .fail(ui.failure);

  currentMove = 1;
};

const onStatistics = function(event){
  event.preventDefault();
  api.index()
  .done(ui.updateStatistics)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#new-game-button').on('click', onCreateNewGame);
  $('#new-game-button-secondary').on('click', onCreateNewGame);
  $('#new-game-button-primary').on('click', onCreateNewGame);
  $('#statistics-button').on('click', onShowStatistics);
  $('#show-games').on('submit', onShowAllGames);
  $('#show-game').on('submit', onShowGame);
  $('#new-player').on('submit', onPlayerJoin);
  $('#statistics-button').on('click',onStatistics);

  $('.wrapper').on('submit','#index0', onMoveHere);
  $('.wrapper').on('submit','#index1', onMoveHere);
  $('.wrapper').on('submit','#index2', onMoveHere);
  $('.wrapper').on('submit', '#index3', onMoveHere);
  $('.wrapper').on('submit', '#index4', onMoveHere);
  $('.wrapper').on('submit', '#index5', onMoveHere);
  $('.wrapper').on('submit', '#index6', onMoveHere);
  $('.wrapper').on('submit', '#index7', onMoveHere);
  $('.wrapper').on('submit', '#index8', onMoveHere);

};

module.exports = {
  addHandlers,
};
