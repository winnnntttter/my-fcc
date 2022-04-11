// arity（参数个数）是函数所需的形参的数量。 函数柯里化（Currying）意思是把接受多个 arity 的函数变换成接受单一 arity 的函数。

// 换句话说，就是重构函数让它接收一个参数，然后返回接收下一个参数的函数，依此类推。

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}

const curried2 = x => y => x + y;

curried(1)(2);

// 柯里化在不能一次为函数提供所有参数情况下很有用。 因为它可以将每个函数的调用保存到一个变量中，该变量将保存返回的函数引用，该引用在下一个参数可用时接受该参数。 下面是使用柯里化函数的例子：
const funcForY = curried(1);
console.log(funcForY(2)); // 3

// 类似地，局部调用（ partial application）的意思是一次对一个函数应用几个参数，然后返回另一个应用更多参数的函数。 这是一个示例：

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

function add(x) {
  // 只修改这一行下面的代码
  return y => z => x + y + z;
  // 只修改这一行上面的代码
}

function add2(x) {
  // 只修改这一行下面的代码
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
  // 只修改这一行上面的代码
}
console.log(add(10)(20)(30));
