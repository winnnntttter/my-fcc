// 行为是可以通过继承来共享的。 然而，在有些情况下，继承不是最好的解决方案。 继承不适用于不相关的对象，比如 Bird 和 Airplane。 虽然它们都可以飞行，但是 Bird 并不是一种 Airplane
// 对于不相关的对象，更好的方法是使用 mixins。 mixin 允许其他对象使用函数集合。
let flyMixin = function (obj) {
  obj.fly = function () {
    console.log('Flying, wooosh!');
  };
};
// flyMixin 能接受任何对象，并为其提供 fly 方法。
let bird = {
  name: 'Donald',
  numLegs: 2
};

let plane = {
  model: '777',
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

// 这里的 flyMixin 接收了bird 和 plane 对象，然后将 fly 方法分配给了每一个对象。 现在 bird 和 plane 都可以飞行了：