'use strict';



const api = require('./api');

//This is a rough draft of the tic tac toe game logic
//indicies of the array will be set based on clicks on the UI
//click handler will reference game logic

//game json -- get format from project scopr

/*
0-1-2
3-4-5
6-7-8

*/

const failure = (error) => {
  console.log(error);
};

const removeButtons = function() {
  $('.game-board').children('form').children('input').remove();
};

const showWinner = function(winner){
  if (winner === 'x') {
    $('#new-game-modal .modal-title').text('CONGRATS!');
    $('#new-game-modal .modal-body img').attr('src','assets/images/tamago.png');
    $('#new-game-modal .modal-body img').attr('alt','Sushi X');
    $('#new-game-modal .modal-body p').text('They see you rollin, they hatin!');
    $('#new-game-modal').modal('show');
  } else if (winner === 'o') {
    $('#new-game-modal .modal-title').text('CONGRATS!');
    $('#new-game-modal .modal-body img').attr('src','assets/images/ahi.png');
    $('#new-game-modal .modal-body img').attr('alt','Sushi O');
    $('#new-game-modal .modal-body p').text('You are soy awesome');
    $('#new-game-modal').modal('show');
  } else{
    $('#new-game-modal .modal-title').text('Tie Game!');
    $('#new-game-modal .modal-body img').attr('src','assets/images/sushi_group.png');
    $('#new-game-modal').modal('show');
  }
};

const hasEmptyString = function(element){
  return element === "";
};

const checkStatus = function(array,gameId){
  if(array[0] === array[1] && array[0] === array[2] && array[0] !== '') {
    let winner = array[0];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if(array[3] === array[4] && array[3] === array[5] && array[3] !== '') {

    let winner = array[3];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if(array[6] === array[7] && array[6] === array[8] && array[6] !== '') {

    let winner = array[6];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if(array[0] === array[3] && array[0] === array[6] && array[0] !== '') {
    let winner = array[0];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (array[1] === array[4] && array[1] === array[7] && array[1] !== '') {
    let winner = array[1];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (array[2] === array[5] && array[2] === array[8] && array[2] !== '') {
    let winner = array[2];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (array[0] === array[4] && array[0] === array[8] && array[0] !== '') {
    let winner = array[0];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (array[2] === array[4] && array[2] === array[6] && array[2] !== ''){
    let winner = array[2];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (!array.some(hasEmptyString)){
    let winner = 'tie';
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  }
};

module.exports = {
  checkStatus,
};
