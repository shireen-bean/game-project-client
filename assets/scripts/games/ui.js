'use strict';

const app = require('../app.js')

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
console.log(error);
};

const successNewGame = function(data){
  console.log('New Game Created');
  console.log(data.game)
}

const successShowAllGames = function(data){
  console.log('Displaying all games');
  console.table(data.games)
}

const successShowGame = function(data){
  console.log('Showing game' + $('#game-id').val())
  console.log(data.game)
}

const successPlayerJoin = function (data){
  console.log('Player o sucessfully joined')
  console.log(data.game)
}


module.exports = {
  failure,
  success,
  successNewGame,
  successShowAllGames,
  successShowGame,
  successPlayerJoin,
};
