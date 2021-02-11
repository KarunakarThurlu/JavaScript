const EventEmitter = require('events');
let evementEmitter = new EventEmitter();

evementEmitter.on('sum', (a, b) => {
    console.log("sum emmiter triggred :" + (a + b));
});
evementEmitter.emit('sum', 2, 8);