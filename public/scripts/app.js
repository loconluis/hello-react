'use strict';

// const square = function (x) {
//   return x * x;
// }

// const squareAlt = x => x * x

// console.log(square(8));
// console.log(squareAlt(8));

// argument object - no longer bound with arrow function
// const add = function (a, b) {
//   console.log(arguments) arguments return on console
//   return a + b
// }
// console.log(add(33, 1, 2, 5, 1))
var add = function add(a, b) {
  // console.log(arguments) //undefined arguments with arrow function
  return a + b;
};
console.log(add(33, 1, 1001));

// this keyword - no longer bound

var user = {
  name: 'Luis',
  cities: ['Guatemala', 'Xela', 'Zacapa', 'Rehutauleu'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });

    // this.cities.forEach(city => {
    //   console.log(this.name + ' has lived in ' + city)
    // })
  }
};

var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 4,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(user.printPlacesLived());
console.log(multiplier.multiply());
