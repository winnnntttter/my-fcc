// 下面的 ES5 代码使用了 apply() 来计算数组的最大值：
// 我们必须使用 Math.max.apply(null, arr)，因为 Math.max(arr) 返回 NaN。 Math.max() 函数中需要传入的是一系列由逗号分隔的参数，而不是一个数组。

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus); // 89

// 开操作符可以提升代码的可读性，使代码易于维护
const arr2 = [6, 89, 3, 45];
const maximus2 = Math.max(...arr2);
console.log(maximus2); // 89

// 然而，展开操作符只能够在函数的参数中或者数组中使用。

const arr11 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr22;

// arr22 = ...arr11; // TypeError: Spread operator cannot be used with an array
arr22 = [...arr11];

console.log(arr22);

// 使用解构赋值来获取对象的值

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// 只修改这一行下面的代码
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES;
const { today: today2, tomorrow: tomorrow2 } = HIGH_TEMPERATURES; // 变量名可以不同
console.log(today, tomorrow); // 77 80
console.log(today2, tomorrow2); // 80 80

// 使用解构赋值从嵌套对象中分配变量
const user = {
  johnDoe: {
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const {
  johnDoe: { age: userAge, email: userEmail }
} = user;
console.log(userAge, userEmail); // 34

// 使用解构赋值从数组中分配变量
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1 2
const [a2, b2, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a2, b2, c); // 1 2 6

// 使用数组解构来交换变量 a 与 b 的值，使 a 接收 b 的值，而 b 接收 a 的值。
let a3 = 8,
  b3 = 6;
[a3, b3] = [b3, a3];
console.log(a3, b3); // 6 8

// 将剩下的元素放进另一个数组里面
const [a4, b4, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(a4, b4, rest); // 1 2 [3, 4, 5, 6]

// 移除数组中的前两个元素
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}

// 可以在函数的参数里直接解构对象
const profileUpdate = profileData => {
  const { name, age, nationality, location } = profileData;
};
const profileUpdate2 = ({ name, age, nationality, location }) => {};
