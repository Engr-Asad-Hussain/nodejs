// Events and Event-Driven Programming:
// When working on browser JavaScript applications, the major portion of 
// our work is to handle events. For example User clicks a button and of 
// course in our program we need to handle that. User hovers the link and 
// again same deal in our program we handle that. 
// Essentially as our program executes at least in part it is controlled 
// by events and thats in browser apps those events are mostly external.

// Now that style of programming is actually called event driven programming. 
// But what about server side is it also possible and of course the answer 
// is yes in fact event driven programming is used heavily in nodejs.
// Basically the idea is following we listen for specific events and 
// register functions that will execute in response to those events. 
// So once our event takes place callback function fires just like in our 
// imaginary button example.

const EventEmitter = require('events')
// EventEmitter is a class (object)


const customEmitter = new EventEmitter()
// customEmitter is an instance of our class EventEmitter
// there are many methods in this instance
// .on() is used to listen for an specific event
// .emit() is used to generate/emit an event

customEmitter.on(eventName='response', () => {
  console.log('Data received ...')
})
// first we can have as many methods .on() for specific event as we want!
// but the order to declaration matters. 
// the first declaration will execute first and then so on so forth

customEmitter.on(eventName='response', (name, uid) => {
  console.log(`Working on setting up environment! User "${name}" id=${uid} is creating ...`)
})

// we can pass arguments from .emit(eventName, ...args) that will be
// catched in the .on() callback function

customEmitter.emit(eventName='response', 'Asad Hussain', 2359)
// need to be caution that we first need to listen for an event then emit the event.
// for example, if customEmitter.emit() is written at the top, 
// the customEmitter.on() will not responds to this event