//This is a rough draft of the tic tac toe game logic
//indicies of the array will be set based on clicks on the UI
//click handler will reference game logic

//game json -- get format from project scopr

/*
0-1-2
3-4-5
6-7-8

winning combos:

0,1,2
3,4,5
6,7,8
0,3,6
1,4,7
2,5,8
0,4,8
2,4,6

*/

const hasEmptyString = function(element){
  return element === "";
}

const checkStatus = function(array){
  if(array[0] == array[1] && array[0] == array[2] && array[0] != ''){
    console.log('Player '+array[0]+' wins!')
  } else if(array[3] == array[4] && array[3] == array[5] && array[3] != ''){
    console.log('Player '+array[3]+' wins!')
  } else if(array[6] == array[7] && array[6] == array[8] && array[6] != ''){
    console.log('Player '+array[6]+' wins!')
  } else if(array[0] == array[3] && array[0] == array[6] && array[0] != ''){
    console.log('Player '+array[0]+' wins!')
  } else if (array[1] == array[4] && array[1] == array[7] && array[1] != ''){
    console.log('Player '+array[1]+' wins!')
  } else if (array[2] == array[5] && array[2] == array[8] && array[2] != ''){
    console.log('Player '+array[2]+' wins!')
  } else if (array[0] == array[4] && array[0] == array[8] && array[0] != ''){
    console.log('Player '+array[0]+' wins!')
  } else if (array[2] == array[4] && array[2] == array[6] && array[2] != ''){
    console.log('Player '+array[2]+' wins!')
  } else if (!array.some(hasEmptyString)){
    console.log('tie')
  } else{
    console.log('keep playing')
  }
};

module.exports = {
  checkStatus,
};
