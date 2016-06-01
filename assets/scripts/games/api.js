'use strict';

const app = require('../app.js')

const createNewGame = function(){
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
  },
  data:''
}
)};

const index = function(){
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
  }
}
)};

const showGame = function(data){
  return $.ajax({
    url: app.host + '/games/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
  },
  data: data
}
)};


const playerJoin = function (gameId){
  return $.ajax({
    url: app.host + '/games/'+ gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
  },
  data:''
  }
  )};

const addMove = function (data, gameId){
  return $.ajax({
    url: app.host + '/games/'+ gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
  },
  data:data
  }
  )};

const updateGameStatus = function(gameId){
  return $.ajax({
    url: app.host + '/games'+ gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
  },
  data: {'game[over]':'true'}
  }
  )};



module.exports = {
  createNewGame,
  index,
  showGame,
  playerJoin,
  addMove,
  updateGameStatus,
};
