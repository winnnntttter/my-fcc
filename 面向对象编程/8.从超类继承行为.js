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

// 第一步：创建一个超类 supertype（或者叫父类）的实例。
// 你已经学会了一种创建 Animal 实例的方法，即使用 new 操作符：
// let animal = new Animal();
// 此语法用于继承时会存在一些缺点

// 我们学习另外一种没有这些缺点的方法来替代 new 操作：
let animal = Object.create(Animal.prototype); // 创建一个 Animal 实例

// Object.create(obj) 创建了一个新对象，并指定了 obj 作为新对象的 prototype。 回忆一下，我们之前说过 prototype 就像是创建对象的“配方”。 如果我们把 animal 的 prototype 设置为与 Animal 构造函数的 prototype 一样，那么就相当于让 animal 这个实例具有与 Animal 的其他实例相同的“配方”了。
animal.eat(); // nom nom nom
console.log(animal instanceof Animal); // true

// 下面为实验
let animal2 = Object.create(Animal); // Animal是一个构造函数，所以animal2也是一个构造函数
// animal2.eat(); // 报错animal2.eat is not a function
console.log(animal2 instanceof Animal); // false

let beagle = Object.create(animal); // animal是一个实例，现在成了beagle的父类prototype
beagle.eat(); // nom nom nom
console.log(beagle instanceof Animal); // true
