'use strict';

const app = require('../app.js')

const createNewGame = function(){
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
  })
};


module.exports = {
  createNewGame,
};
