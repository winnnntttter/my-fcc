// Constructors 是创建对象的函数。 函数给这个新对象定义属性和行为。 可将它们视为创建的新对象的蓝图。
function Bird() {
  this.name = 'Albert';
  this.color = 'blue';
  this.numLegs = 2;
}

// 构造函数转成ES6的类

// class Bird {
//   constructor() {
//     this.name = 'Albert';
//     this.color = 'blue';
//     this.numLegs = 2;
//   }
// }

// 构造函数函数名的首字母大写，这是为了方便我们区分构造函数（ constructors）和其他非构造函数。
// 构造函数使用 this 关键字来给它将创建的这个对象设置新的属性。 在构造函数里面，this 指向的就是它新创建的这个对象。
// 构造函数定义了属性和行为就可创建对象，而不是像其他函数一样需要设置返回值。

let blueBird = new Bird();
console.log(blueBird.name); // Albert
// 通过构造函数创建对象的时候要使用 new 操作符。 因为只有这样，JavaScript 才知道要给 Bird 这个构造函数创建一个新的实例：blueBird。 如果不使用 new 操作符来新建对象，那么构造函数里面的 this 就无法指向新创建的这个对象实例，从而产生不可预见的错误。

// 扩展构造函数以接收参数
function Bird2(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

// class Bird2 {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
//   }
// }

let cardinal = new Bird2('Bruce', 'red');
console.log(cardinal.name); // Bruce
