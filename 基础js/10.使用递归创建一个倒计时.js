// 一个数字 1 到 n 的连续数组
function range(n) {
  if (n <= 0) {
    return [];
  } else {
    return range(n - 1).concat(n);
  }
}
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [1, 2, 3, 4, 5] 这似乎是违反直觉的，因为 n 的值递减，但是最终数组中的值却递增。 之所以发生这种情况，是因为在递归调用返回之后，才调用 push。在将 n pushed 进数组时，countup(n - 1) 已经调用赋值成功并返回了 [1, 2, ..., n - 1]。

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n); // 在数组开头插入元素
    return countArray;
  }
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]

// 返回一个连续数字数组startNum 到 endNum
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum);
    return countArray;
  }
}
console.log(rangeOfNumbers(5, 10)); // [5, 6, 7, 8, 9, 10]
