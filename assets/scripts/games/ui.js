'use strict';

const app = require('../app.js')

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
console.log(error);
};

const successNewGame = function(){
  console.log('New Game Created')
}

module.exports = {
  failure,
  success,
  successNewGame,

};
