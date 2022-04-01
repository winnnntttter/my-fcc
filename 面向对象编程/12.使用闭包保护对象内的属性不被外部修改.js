// 在上一次挑战中，bird 有一个公共属性 name。 公共属性的定义就是：它可以在 bird 的定义范围之外被访问和更改。
// 因此，代码的任何地方都可以轻松地将 bird 的 name 属性更改为任意值。

// 使属性私有化最简单的方法就是在构造函数中创建变量。 可以将该变量范围限定在构造函数中，而不是全局可用。 这样，属性只能由构造函数中的方法访问和更改。
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function () {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

// 这里的 getHatchedEggCount 是一种特权方法，因为它可以访问私有属性 hatchedEgg。 这是因为 hatchedEgg 是在与 getHatchedEggCount 相同的上下文中声明的。 在 JavaScript 中，函数总是可以访问创建它的上下文。 这就叫做 closure 闭包。
