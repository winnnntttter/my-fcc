function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird('Donald');
let canary = new Bird('Tweety');
// name 和 numLegs 被叫做 自身属性，因为它们是直接在实例对象上定义的。 这就意味着 duck 和 canary 这两个对象分别拥有这些属性的独立副本。 事实上，Bird 的所有实例都将拥有这些属性的独立副本。

let ownProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // ['name', 'numLegs']
