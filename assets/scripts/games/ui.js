'use strict';

const app = require('../app.js');
const logic = require('./logic.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
console.log(error);
};

const successNewGame = function(data){
  console.log('New Game Created');
  console.log(data.game);
}

const successShowAllGames = function(data){
  console.log('Displaying all games');
  console.table(data.games);
}

const successShowGame = function(data){
  console.log('Showing game' + $('#game-id').val());
  console.log(data.game);
}

const successPlayerJoin = function (data){
  console.log('Player o sucessfully joined')
  console.log(data.game);
}

const successAddMove = function (data){
  console.log('Move successfully added');
  console.log(data.game);
}

const successUpdateBoard = function(data){
  console.log('current board '+data.game.cells)
  let moveData = data.game.cells

  logic.checkStatus(moveData)
}


module.exports = {
  failure,
  success,
  successNewGame,
  successShowAllGames,
  successShowGame,
  successPlayerJoin,
  successAddMove,
  successUpdateBoard,
};
