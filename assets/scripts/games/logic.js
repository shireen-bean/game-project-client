'use strict'



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
  console.log('error');
console.log(error);
};

const removeButtons = function() {
  console.log('buttons being removed')
  $('.game-board').children('form').children('input').remove();
}

const showWinner = function(winner){
  if (winner == 'x'){
    $('#new-game-modal .modal-body img').attr('src','assets/images/tamago.png')
    $('#new-game-modal').modal('show');
  } else if (winner == 'o'){
    $('#new-game-modal .modal-body img').attr('src','assets/images/ahi.png')
    $('#new-game-modal').modal('show');
  } else{
    $('#new-game-modal .modal-title').text('Tie Game!')
    $('#new-game-modal .modal-body img').attr('src','../../assets/images/sushi_group.png')
    $('#new-game-modal').modal('show');
  }

}



const hasEmptyString = function(element){
  return element === "";
}

const checkStatus = function(array,gameId){
  if(array[0] == array[1] && array[0] == array[2] && array[0] != ''){
    console.log('Player '+array[0]+' wins!');
    let winner = array[0];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if(array[3] == array[4] && array[3] == array[5] && array[3] != ''){
    console.log('Player '+array[3]+' wins!');
    let winner = array[3];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if(array[6] == array[7] && array[6] == array[8] && array[6] != ''){
    console.log('Player '+array[6]+' wins!');
    let winner = array[6];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if(array[0] == array[3] && array[0] == array[6] && array[0] != ''){
    console.log('Player '+array[0]+' wins!');
    let winner = array[0];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (array[1] == array[4] && array[1] == array[7] && array[1] != ''){
    console.log('Player '+array[1]+' wins!');
    let winner = array[1];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (array[2] == array[5] && array[2] == array[8] && array[2] != ''){
    console.log('Player '+array[2]+' wins!');
    let winner = array[2];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (array[0] == array[4] && array[0] == array[8] && array[0] != ''){
    console.log('Player '+array[0]+' wins!');
    let winner = array[0];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (array[2] == array[4] && array[2] == array[6] && array[2] != ''){
    console.log('Player '+array[2]+' wins!');
    let winner = array[2];
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else if (!array.some(hasEmptyString)){
    console.log('tie');
    let winner = 'tie';
    api.updateGameStatus(gameId)
    .done(removeButtons)
    .fail(failure);
    showWinner(winner);
  } else{
    console.log('keep playing');
  }
};

module.exports = {
  checkStatus,
};
