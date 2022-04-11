// every 方法用于检测数组中所有元素是否都符合指定条件。 如果所有元素满足条件，返回布尔值 true，反之返回 false。
function checkPositive(arr) {
  // 只修改这一行下面的代码
  return arr.every(item => item > 0);
  // 只修改这一行上面的代码
}

checkPositive([1, 2, 3, -4, 5]);

// some 方法用于检测数组中任何元素是否满足指定条件。 如果有一个元素满足条件，返回布尔值 true，反之返回 false。

function checkPositive2(arr) {
  // 只修改这一行下面的代码
  return arr.some(item => item > 0);
  // 只修改这一行上面的代码
}

checkPositive2([1, 2, 3, -4, 5]);
