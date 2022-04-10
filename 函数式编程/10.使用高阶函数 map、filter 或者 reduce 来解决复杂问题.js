// 使用 map()、filter() 和 reduce() 的任何组合完成 squareList 函数的代码。 传递一个包含实数的数组给函数时，函数应返回一个新的数组，只包含正整数（小数不是整数）的平方值， 例如 [-3, 4.8, 5, 3, -3.2] 这样一个包含实数的数组。

const squareList = arr => {
  return arr.map(x => x * x).filter(x => x > 0 && x % 1 === 0);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
