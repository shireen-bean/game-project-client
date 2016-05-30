'use strict';

const app = require('../app.js')

const createNewGame = function(){
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
  })
};


module.exports = {
  createNewGame,
};
