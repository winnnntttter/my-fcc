// 不要更改变量或对象 - 创建新变量和对象，并在需要时从函数返回它们。 提示：使用类似 const newArr = arrVar 的东西，其中 arrVar 是一个数组，只会创建对现有变量的引用，而不是副本。 所以更改 newArr 中的值会同时更改 arrVar 中的值。
// 声明函数参数 - 函数内的任何计算仅取决于参数，而不取决于任何全局对象或变量。

// 重构代码，使全局数组 bookList 在函数内部不会被改变。 add 函数可以将指定的 bookName 增加到数组末尾并返回一个新的数组（列表）。 remove 函数可以从数组中移除指定 bookName。

// 注意： 两个函数都应该返回一个数组，任何新参数都应该在 bookName 参数之前添加。

// 全局变量
const bookList = ['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae'];

// 修改这行下面的代码
function add(arr, bookName) {
  // arr.push(bookName);
  // return arr;

  // 返回新数组，不改变原数组
  return [...arr, bookName];
  // 修改这行上面的代码
}

// 修改这行下面的代码
function remove(arr, bookName) {
  // const book_index = arr.indexOf(bookName);
  // if (book_index >= 0) {
  //   arr.splice(book_index, 1);
  //   return arr;
  //   // 修改这行上面的代码
  // }
   // 返回新数组，不改变原数组
  return arr.filter(item => item !== bookName);
}
