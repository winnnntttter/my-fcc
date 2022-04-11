//  它需要一个参数作为分隔符，它可以是用于拆分字符串或正则表达式的一个字符。
const str = 'Hello World';
const bySpace = str.split(' '); // ['Hello', 'World']

const otherString = 'How9are7you2today';
const byDigits = otherString.split(/\d/); // ['How', 'are', 'you', 'today']

// 在 splitify 函数中用 split 方法将 str 分割成单词数组。 这个方法应该返回一个数组。 单词不一定都是用空格分隔，所以数组中不应包含标点符号。

function splitify(str) {
  return str.split(/\W/);
}

splitify('Hello World,I-am code');

function sentensify(str) {
  // 只修改这一行下面的代码
  return str.split(/\W/).filter(Boolean).join(' ');
  // 只修改这一行上面的代码
}

sentensify('May-the-force-be-with-you');
