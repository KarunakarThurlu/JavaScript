
let num = [34, 45, 56, 67, 67, 87, 87, 78];

let filterArray = num.filter(n => n < 50);
console.log(filterArray);

let mapArray = num.map(n => n + 3);
console.log(mapArray);

let arraySum = num.reduce((x = 0, e) => e + x)
console.log(arraySum);

let emp =
  [
    { "empName": "karun", "esal": 25000.0, "empId": 1001, "CellNo": 9099887626 },
    { "empName": "varun", "esal": 5000.0, "empId": 1002, "CellNo": 9999887626 },
    { "empName": "meanon", "esal": 2000.0, "empId": 1003, "CellNo": 9899887626 },
    { "empName": "jeevan", "esal": 29000.0, "empId": 1004, "CellNo": 9799887626 }
  ]

let present = emp.some(e => e.empName === "jeevan");
console.log(present);


let filter = emp.filter(e => e.esal > 25000.0);
console.log(filter);

let map = emp.map(e => e.empName.toLocaleUpperCase());
console.log(map);

let esalSum = emp.reduce((a, e) => { return e.esal + a }, 0)
console.log(esalSum);


let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce((accumulator, currentValue) => {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray)