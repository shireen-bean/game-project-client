'use strict'

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const logic = require('./logic.js');

let currentMove = 1;
let current_game = 3; /// make this calculate the length of the game array


const onCreateNewGame = function(event) {
  event.preventDefault();
  api.createNewGame()
  .done(ui.successNewGame)
  .fail(ui.failure);
  current_game++
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
  let gameId = $('#game-id-join').val();
  api.playerJoin(gameId)
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

const checkNextMove = function(currentMove){
  console.log(currentMove);
  if (currentMove % 2 == 1){
    return 'x'
  } else {
    return 'o'
  }
}

const onMoveHere = function(event){
  event.preventDefault();
  let move = checkNextMove(currentMove);
  console.log('current move is '+move);
  let gameId = $('.game-board').attr('value');
  console.log('the game id is '+ gameId);
  $("input[name='game[cell][value]']").val(move);
  let data = getFormFields(event.target);
  api.addMove(data,gameId)
  .done(ui.successUpdateBoard)
  .fail(ui.failure);
  return currentMove+=1;
}

// const onShowModal = function () {
//   $('#sign-in-modal').modal('show')
// }


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
