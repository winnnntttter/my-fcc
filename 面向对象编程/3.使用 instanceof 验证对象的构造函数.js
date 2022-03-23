let Bird = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let crow = new Bird('Alexis', 'black');

console.log(crow instanceof Bird); // true

let canary = {
  name: 'Mildred',
  color: 'Yellow',
  numLegs: 2
};
console.log(canary instanceof Bird); // false

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);

console.log(myHouse instanceof House); // true

console.log(myHouse.constructor === House); // true

// 由于 constructor 属性可以被重写（在下面两节挑战中将会遇到），所以最好使用instanceof 方法来检查对象的类型。