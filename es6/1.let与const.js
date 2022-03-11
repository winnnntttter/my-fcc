// 使用 var 关键字声明变量时，它是全局声明的，如果在函数内部声明则是局部声明的。
// let 关键字的行为类似，但有一些额外的功能。 在代码块、语句或表达式中使用 let 关键字声明变量时，其作用域仅限于该代码块、语句或表达式。
// 在代码块中使用 let 关键字声明变量，变量的值会在代码块结束时被清除。
// 重要的是要了解使用 const 分配给变量的对象（包括数组和函数）仍然是可变的。 使用 const 声明只能防止变量标识符的重新分配。

const s = [5, 7, 2];
function editInPlace() {
  // 只修改这一行下面的代码
  // 使用 s = [2, 5, 7] 将无效
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // 只修改这一行上面的代码
}
editInPlace();

// const 声明并不会真的保护数据不被改变。 为了确保数据不被改变，JavaScript 提供了一个函数 Object.freeze。

let obj = {
  name: 'FreeCodeCamp',
  review: 'Awesome'
};
Object.freeze(obj);
obj.review = 'bad';
obj.newProp = 'Test';
console.log(obj); // { name: 'FreeCodeCamp', review: 'Awesome' }

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // 只修改这一行下面的代码
  Object.freeze(MATH_CONSTANTS);
  // 只修改这一行上面的代码
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI); // 3.14
