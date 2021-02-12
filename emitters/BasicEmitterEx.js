const EventEmitter = require('events');
let evementEmitter = new EventEmitter();

evementEmitter.on('sum', (a, b) => {
    console.log("sum emmiter triggred :" + (a + b));
});
evementEmitter.emit('sum', 2, 8);

class Persion extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let person = new Persion("karunakar");

person.on('name', () => {
    console.log(`Hai....${person.name}`)
})


person.emit('name');
