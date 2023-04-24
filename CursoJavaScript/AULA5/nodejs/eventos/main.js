var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Fire an event
eventEmitter.emit('eventName');
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
console.log('connection succesful.');
// Fire the data_received event
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the
eventEmitter.on('data_received', function() {
console.log('data received succesfully.');
});
// Fire the connection event
eventEmitter.emit('connection');
console.log("Program Ended.");

}