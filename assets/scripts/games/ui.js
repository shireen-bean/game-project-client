'use strict';

const app = require('../app.js');
const logic = require('./logic.js');
const events = require('./events.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
console.log(error);
};

const successNewGame = function(data){
  console.log(data.game.id);
  let newGameId = data.game.id;

  $('.wrapper').html("<section class='game-board' value='"+newGameId+"'>\
    <form class='game-square col-xs-4' id='index0'>\
      <input class='cell-number' name='game[cell][index]' type='submit' value='0'>\
      <input class='cell-move' name='game[cell][value]' type='text' value=''>\
      <input type='submit' value='Move Here'>\
    </form>\
    <form class='game-square col-xs-4' id='index1'>\
      <input class='cell-number' name='game[cell][index]' type='submit' value='1'>\
      <input class='cell-move' name='game[cell][value]' type='text' value=''>\
      <input type='submit' value='Move Here'>\
    </form>\
    <form class='game-square col-xs-4' id='index2'>\
      <input class='cell-number' name='game[cell][index]' type='submit' value='2'>\
      <input class='cell-move' name='game[cell][value]' type='text' value=''>\
      <input type='submit' value='Move Here'>\
    </form>\
    <form class='game-square col-xs-4' id='index3'>\
      <input class='cell-number' name='game[cell][index]' type='submit' value='3'>\
      <input class='cell-move' name='game[cell][value]' type='text' value=''>\
      <input type='submit' value='Move Here'>\
    </form>\
    <form class='game-square col-xs-4' id='index4'>\
      <input class='cell-number' name='game[cell][index]' type='submit' value='4'>\
      <input class='cell-move' name='game[cell][value]' type='text' value=''>\
      <input type='submit' value='Move Here'>\
    </form>\
    <form class='game-square col-xs-4' id='index5'>\
      <input class='cell-number' name='game[cell][index]' type='submit' value='5'>\
      <input class='cell-move' name='game[cell][value]' type='text' value=''>\
      <input type='submit' value='Move Here'>\
    </form>\
    <form class='game-square col-xs-4' id='index6'>\
      <input class='cell-number' name='game[cell][index]' type='submit' value='6'>\
      <input class='cell-move' name='game[cell][value]' type='text' value=''>\
      <input type='submit' value='Move Here'>\
    </form>\
    <form class='game-square col-xs-4' id='index7'>\
      <input class='cell-number' name='game[cell][index]' type='submit' value='7'>\
      <input class='cell-move' name='game[cell][value]' type='text' value=''>\
      <input type='submit' value='Move Here'>\
    </form>\
    <form class='game-square col-xs-4' id='index8'>\
      <input class='cell-number' name='game[cell][index]' type='submit' value='8'>\
      <input class='cell-move' name='game[cell][value]' type='text' value=''>\
      <input type='submit' value='Move Here'>\
    </form>");


}

const successShowAllGames = function(data){
  console.log('Displaying all games');
  console.table(data.games);
  console.log(data.games.length)
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
  let moveData = data.game.cells;
  let gameId = data.game.id;
  logic.checkStatus(moveData,gameId)
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
