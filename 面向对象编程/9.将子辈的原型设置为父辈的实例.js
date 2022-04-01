// 在上一个挑战中，我们学习了从超类（或者叫父类） Animal 继承其行为的第一个步骤：创建一个 Animal 的新实例。
function Animal() {}
/* Animal.prototype.eat = function () {
  console.log('nom nom nom');
}; */
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  }
};
let animal = Object.create(Animal.prototype); // 创建一个 Animal 实例

// 第二个步骤：给子类型（或者子类）设置 prototype。 这样一来，Bird 就是 Animal 的一个实例了。
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);

// 请记住，prototype 类似于创建对象的“配方”。 从某种意义上来说，Bird 对象的配方包含了 Animal 的所有关键“成分”。

let duck = new Bird('Donald');
duck.eat();
// duck 继承了Animal 的所有属性，其中包括了 eat 方法。

// 当一个对象从另一个对象那里继承了其 prototype 时，那它也继承了父类的 constructor 属性。
console.log(duck.constructor === Animal); // true
console.log(duck instanceof Bird); // true

// 但是 duck 和其他所有 Bird 的实例都应该表明它们是由 Bird 创建的，而不是由 Animal 创建的。 为此，你可以手动将 Bird 的构造函数属性设置为 Bird 对象：
Bird.prototype.constructor = Bird;
console.log(duck.constructor === Bird); // true



// function Animal() { }
// function Bird() { }
// function Dog() { }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();