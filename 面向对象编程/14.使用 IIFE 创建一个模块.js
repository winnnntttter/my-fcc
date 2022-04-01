// 一个立即调用函数表达式（IIFE）通常用于将相关功能分组到单个对象或者是 module 中。 例如，先前的挑战中定义了两个 mixins：
function glideMixin(obj) {
  obj.glide = function () {
    console.log('Gliding on the water');
  };
}
function flyMixin(obj) {
  obj.fly = function () {
    console.log('Flying, wooosh!');
  };
}

// 我们可以将这些 mixins 分成以下模块：
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log('Gliding on the water');
      };
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        console.log('Flying, wooosh!');
      };
    }
  };
})();

// 一个立即调用函数表达式（IIFE）返回了一个 motionModule 对象。 返回的这个对象包含了作为对象属性的所有 mixin 行为。 module 模式的优点是，所有的运动相关的行为都可以打包成一个对象，然后由代码的其他部分使用。 下面是一个使用它的例子：
var duck = {};
motionModule.glideMixin(duck);
duck.glide();

// let funModule = (function () {
//   return {
//     isCuteMixin: function (obj) {
//       obj.isCute = function () {
//         return true;
//       };
//     },
//     singMixin: function (obj) {
//       obj.sing = function () {
//         console.log('Singing to an awesome tune');
//       };
//     }
//   };
// })();
