// 计算数组内元素前 n 的元素乘积
// 注意： 递归函数在没有函数调用时（在这个例子是，是当 n <= 0 时）必需有一个跳出结构，否则永远不会执行完毕。
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

// 递归调用数组 arr 从前 n 个元素和
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
