let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray 等于 [true, true, undefined, false, null]。 thisArray 保持不变， thatArray 包含与 thisArray 相同的元素。

// 返回一个由 num 个 arr 组成的新的二维数组
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // 只修改这一行下面的代码
    newArr.push([...arr]);
    // 只修改这一行上面的代码
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// 展开语法（spread）的另一个重要用途是合并数组，或者将某个数组的所有元素插入到另一个数组的任意位置。 我们也可以使用 ES5 的语法连接两个数组，但只能让它们首尾相接。 而展开语法可以让这样的操作变得极其简单：

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // 修改这一行
  return sentence;
}

console.log(spreadOut()); // ['learning', 'to', 'code', 'is', 'fun']

// indexOf() 方法返回某个指定的字符串值在字符串中首次出现的位置。 如果没有找到匹配的字符串，则返回 -1。
function quickCheck(arr, elem) {
  // 只修改这一行下面的代码
  return arr.indexOf(elem) >= 0;
  // 只修改这一行上面的代码
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// 使用for循环遍历数组

// 我们已经定义了 filteredArray 函数，它接受一个嵌套的数组 arr 和一个 elem 作为参数，并要返回一个新数组。 arr 数组中嵌套的数组里可能包含 elem 元素，也可能不包含。 请修改该函数，用一个 for 循环来做筛选，使函数返回一个由 arr 中不包含 elem 的数组所组成的新数组。
function filteredArray(arr, elem) {
  let newArr = [];
  // 只修改这一行下面的代码
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(elem)) {
      newArr.push(arr[i]);
    }
  }
  // 只修改这一行上面的代码
  return newArr;
}
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [2, 13, 26],
      [19, 2, 9]
    ],
    3
  )
); // [ [ 2, 13, 26 ], [ 19, 2, 9 ] ]

// 创建复杂的多维数组
// 我们已经定义了一个叫做 myNestedArray 的数组变量。 请修改 myNestedArray，使用字符串（string）、数字（number）或布尔值（boolean）的任意组合作为数组的元素，并让 myNestedArray 刚好有 5 层（注意，最外层的数组是第 1 层）。 同时，请在第 3 层的数组中包含字符串 deep；在第 4 层的数组中包含字符串 deeper，在第 5 层的数组中包含字符串 deepest。
let myNestedArray = [
  // 只修改这一行下面的代码
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', ['deep', ['deeper', ['deepest']]]]
  // 只修改这一行上面的代码
];
