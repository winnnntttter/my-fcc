let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + dog.numLegs + ' legs.';
  }
};

console.log(dog.sayLegs()); // This dog has 4 legs.

let duck = {
  name: 'Aflac',
  numLegs: 2,
  sayName: function () {
    return 'The name of this duck is ' + this.name + '.';
  }
};
