'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./games/events.js');


// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
});
