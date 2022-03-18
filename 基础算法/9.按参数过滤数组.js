// 返回数组中第一个通过校验测试的元素
function findElement(arr, func) {
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = i;
      break;
    }
  }
  return arr[num];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
