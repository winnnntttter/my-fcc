function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]); // [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

console.log(reverseAlpha(['l', 'h', 'z', 'b', 's'])); // ['z', 's', 'l', 'h', 'b']

// JavaScript 的默认排序方法是 Unicode 值顺序排序，有时可能会得到意想不到的结果。 因此，建议提供一个回调函数来指定如何对数组项目排序。 这个回调函数通常叫做 compareFunction，它根据 compareFunction 的返回值决定数组元素的排序方式： 如果两个元素 a 和 b，compareFunction(a,b) 返回一个比 0 小的值，那么 a 会在 b 的前面。 如果两个元素 a 和 b，compareFunction(a,b) 返回一个比 0 大的值，那么 b 会在 a 的前面。 如果两个元素 a 和 b，compareFunction(a,b) 返回等于 0 的值，那么 a 和 b 的位置保持不变。

function alphabeticalOrder(arr) {
  // 只修改这一行下面的代码

  return arr.sort();
  // 只修改这一行上面的代码
}

alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']);

// sort 方法会产生改变原始数组中元素顺序的副作用。 换句话说，它会改变数组的位置。 避免这种情况的一种方法是先将空数组连接到正在排序的数组上（记住 slice 和 concat 返回一个新数组），再用sort方法。

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // 只修改这一行下面的代码
  return arr.slice().sort((a, b) => a - b);
  // 只修改这一行上面的代码
}

console.log(nonMutatingSort(globalArray)); // [2, 3, 5, 6, 9]
