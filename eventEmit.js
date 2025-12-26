const EventEmitter = require('events');

const event = new EventEmitter();

// Registering an event listener for 'greet' event
event.on('greet', (name, age) => {
    console.log(`Hello, ${name}! I'm ${age} years old.`);
});
 
// Emitting the 'greet' event--trigger the event
event.emit('greet', "Babe", 25);


// once - listens only once
event.once('welcome', (name) => {
    console.log(`Welcome, ${name}! This message will appear only once.`);
});


// Event remove listener
const callBackEvent = (name, age) => {
    console.log(`Hi, ${name}. You are ${age} years old.`);
}

event.on('removeListener', callBackEvent);
event.emit('removeListener', 'Alice', 30); // This will trigger the listener
event.removeListener('removeListener', callBackEvent);

