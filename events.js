const events = require('events');
const EventEmitter = events.EventEmitter;
const connect = new EventEmitter(); //obj. of EventEmitter

connect.on('online', () => { //event name: online
    console.log('A new user has connected');
});

connect.emit('online'); //trigger event
connect.emit('online');
connect.emit('online');
connect.emit('online');
connect.emit('online');