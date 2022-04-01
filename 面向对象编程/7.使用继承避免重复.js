function Bird(name) {
  this.name = name;
}
function Dog(name) {
  this.name = name;
}

Bird.prototype = {
  constructor: Bird,
  describe: function () {
    console.log('My name is ' + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function () {
    console.log('My name is ' + this.name);
  }
};

// 我们可以看到 describe 方法在两个地方重复定义了。
// 根据以上所说的 DRY 原则，我们可以通过创建一个 Animal supertype（或者父类）来重写这段代码：

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log('My name is ' + this.name);
  }
};

// Animal 构造函数中定义了 describe 方法，可将 Bird 和 Dog 这两个构造函数的方法删除掉：

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
