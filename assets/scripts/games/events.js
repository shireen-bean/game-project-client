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

  $('.wrapper').on('submit','#index0', onMoveHere);
  $('.wrapper').on('submit','#index1', onMoveHere);
  $('.wrapper').on('submit','#index2', onMoveHere);
  $('.wrapper').on('submit', '#index3', onMoveHere);
  $('.wrapper').on('submit', '#index4', onMoveHere);
  $('.wrapper').on('submit', '#index5', onMoveHere);
  $('.wrapper').on('submit', '#index6', onMoveHere);
  $('.wrapper').on('submit', '#index7', onMoveHere);
  $('.wrapper').on('submit', '#index8', onMoveHere);
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
  let spot = event.target.id;
  console.log('spot is '+spot)
  api.addMove(data,gameId)
  .done(ui.successUpdateBoard)
  .fail(ui.failure);

  ui.addImage(spot,move)
  return currentMove+=1;
  debugger;
}

// const onShowModal = function () {
//   $('#sign-in-modal').modal('show')
// }




const addHandlers = () => {
  $('#new-game-button').on('click', onCreateNewGame);
  $('#show-games').on('submit', onShowAllGames);
  $('#show-game').on('submit', onShowGame);
  $('#new-player').on('submit', onPlayerJoin);


  //game board click handlers



};

module.exports = {
  addHandlers,
  onMoveHere,
};
