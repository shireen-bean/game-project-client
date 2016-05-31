'use strict';

const app = require('../app.js')

const create = function(){
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    data:'{}',
    headers: {
      Authorization: 'Token token=' + app.user.token
  })
};




module.exports = {
  create,
};
