// class 只是一个语法糖，它并不像 Java、Python 或者 Ruby 这一类的语言一样，严格履行了面向对象的开发规范。

// 在 ES5 里面，我们通常会定义一个构造函数 constructor，然后使用 new 关键字来实例化一个对象：

var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle('Jupiter');

// class 语法只是简单地替换了构造函数 constructor 的写法：
class SpaceShuttle2 {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus2 = new SpaceShuttle2('Jupiter');

// 使用 class 关键词，写一个 constructor 来创建 Vegetable class。
// 在 class 内部，this 关键字指向的是实例，而不是类。

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

// 你可以从对象中获得一个值，也可以给对象的属性赋值。
// 这些操作通常被称为 getters 以及 setters。
// Getter 函数的作用是可以让对象返回一个私有变量，而不需要直接去访问私有变量。
// Setter 函数的作用是可以基于传进的参数来修改对象中私有变量。
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
// 注意： 通常会在私有变量前添加下划线（_）。 然而，这种做法本身并不是将变量变成私有的。

// 使用 class 关键字创建一个 Thermostat class。 constructor 接收一个华氏温度。
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  /* // getter
  get celsius() {
    return ((this.fahrenheit - 32) * 5) / 9;
  }
  // setter
  set celsius(updatedCelsius) {
    this.fahrenheit = (updatedCelsius * 9) / 5 + 32;
  } */
  get temperature() {
    return ((this.fahrenheit - 32) * 5) / 9;
  }
  set temperature(updatedTemperature) {
    this.fahrenheit = (updatedTemperature * 9) / 5 + 32;
  }
}
