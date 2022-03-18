// 请返回一个数组，该数组由参数中每个子数组中的最大数字组成。

function largestOfFour(arr) {
  return arr.map(function (item) {
    return Math.max.apply(null, item);
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
