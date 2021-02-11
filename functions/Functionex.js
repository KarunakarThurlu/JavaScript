let mathop = require('./CallBackFunction');
let A = () => {
    B();
    C();
    console.log("A")
}
let B = () => {
    C();
    console.log("B")
}
let C = () => {
    console.log("C")
}

console.log(mathop.sum(8, 9));
console.log(mathop.mul(10, 7));
console.log(mathop.PI)