// Bird 是一个构造函数，它继承了 Animal 的 prototype：
function Animal() {}
Animal.prototype.eat = function () {
  console.log('nom nom nom');
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// 除了从 Animal 构造函数继承的行为之外，还需要给 Bird 对象添加它独有的行为。 这里，我们给 Bird 对象添加一个 fly() 函数。 函数会以一种与其他构造函数相同的方式添加到 Bird's 的 prototype 中：
Bird.prototype.fly = function () {
  console.log("I'm flying!");
};
// 现在 Bird 的实例中就有了 eat() 和 fly() 这两个方法：
let duck = new Bird();
duck.eat();
duck.fly();

// 重写继承的方法
Bird.prototype.eat = function () {
  return console.log('peck peck peck');
};

let duck2 = new Bird();
duck2.eat();
duck2.fly();
