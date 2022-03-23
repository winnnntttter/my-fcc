// 所有 Bird 实例可能会有相同的 numLegs 值，所以在每一个 Bird 的实例中本质上都有一个重复的变量 numLegs。当只有两个实例时可能并不是什么问题，但想象一下如果有数百万个实例。 这将会产生许许多多重复的变量。

function Bird(name) {
  this.name = name;
}
Bird.prototype.numLegs = 2;

// 由于所有的实例都可以继承 prototype 上的属性，所以可以把 prototype 看作是创建对象的 "配方"。 请注意： duck 和 canary 的 prototype 属于 Bird 的构造函数，即 Bird 的原型 Bird.prototype。 JavaScript 中几乎所有的对象都有一个 prototype 属性，这个属性是属于它所在的构造函数。


// 迭代所有属性
let duck = new Bird('Donald');
let ownProps = [];
let prototypeProps = [];
let allProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
  allProps.push(property);
}

console.log(ownProps); // ['name']
console.log(prototypeProps); // ['numLegs']
console.log(allProps); // ['name', 'numLegs']
