function Bird(name) {
  this.name = name;
}

Bird.prototype = {
  numLegs: 2,
  eat() {
    console.log('eating');
  },
  eat2: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  }
};

let duck = new Bird('Donald');

// 更改原型时，记得设置构造函数属性
// 手动设置一个新对象的原型有一个重要的副作用。 它清除了 constructor 属性！ 此属性可以用来检查是哪个构造函数创建了实例，但由于该属性已被覆盖，它现在给出了错误的结果：
console.log(Bird.prototype.constructor === Bird); // false
console.log(Bird.prototype.constructor === Object); // true
console.log(duck instanceof Bird); // true
console.log(duck.constructor === Bird); // false

// 为了解决这个问题，凡是手动给新对象重新设置过原型对象的，都别忘记在原型对象中定义一个 constructor 属性：

function Bird2(name) {
  this.name = name;
}

Bird2.prototype = {
  constructor: Bird2,
  numLegs: 2,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  }
};
let duck2 = new Bird2('Donald');
console.log(Bird2.prototype.constructor === Bird2); // true
console.log(Bird2.prototype.constructor === Object); // false
console.log(duck2 instanceof Bird2); // true
console.log(duck2.constructor === Bird2); // true


// 就像人们从父母那里继承基因一样，对象也可直接从创建它的构造函数那里继承其 prototype
// duck 从 Bird 构造函数那里继承了它的 prototype。 你可以使用 isPrototypeOf 方法来验证他们之间的关系：
console.log(Bird2.prototype.isPrototypeOf(duck2)); // true
