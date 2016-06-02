'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./games/events.js');


// On document ready
$(() => {
  $('head').append('<link rel="stylesheet" href="./assets/styles/style.css">');
  $('head').append("<link href='https://fonts.googleapis.com/css?family=Covered+By+Your+Grace' rel='stylesheet' type='text/css'>");
  authEvents.addHandlers();
  gameEvents.addHandlers();
});
