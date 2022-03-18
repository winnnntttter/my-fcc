// 将第一个数组中的所有元素依次复制到第二个数组中。
// 请注意，你需要从第二个数组索引值为 n 的地方开始插入。
// 作为输入参数的两个数组在函数执行前后应保持不变。
function frankenSplice(arr1, arr2, n) {
  // return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));
  // arr2.splice(n, 0, ...arr1);  // arr2变了，不行
  // return arr2;
  var arr3 = arr2.slice(0);
  arr3.splice(n, 0, ...arr1);
  return arr3;
}

// frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
