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
const add = (a, b) => {
  // console.log(arguments) //undefined arguments with arrow function
  return a + b
}
console.log(add(33, 1, 1001))


// this keyword - no longer bound

const user = {
  name: 'Luis',
  cities: ['Guatemala', 'Xela', 'Zacapa', 'Rehutauleu'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);


    // this.cities.forEach(city => {
    //   console.log(this.name + ' has lived in ' + city)
    // })
  }
};

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy)
  }
}

console.log(user.printPlacesLived())
console.log(multiplier.multiply())