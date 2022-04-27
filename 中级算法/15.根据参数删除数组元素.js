// 给定数组 arr，从数组的第一个元素开始，用函数 func 来检查数组的每个元素是否返回 true。 如果返回 false，就把这个元素删除。 持续执行删除操作，直到某个元素传入 func 时返回 true 为止。
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
