'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./games/events.js');


// On document ready
$(() => {
  $('head').append('<link rel="stylesheet" href="./assets/styles/style.css">');
  authEvents.addHandlers();
  gameEvents.addHandlers();
});
