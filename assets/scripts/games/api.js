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
    url: app.host + '/games',
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


const playerJoin = function (){
  return $.ajax({
    url: app.host + '/games'+ '/1',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
  },
  data:''
  }
  )};




module.exports = {
  createNewGame,
  index,
  playerJoin,
  showGame,
};
