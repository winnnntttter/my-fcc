// 可以 用 ES2015 引入的 .endsWith() 方法来解决。

function confirmEnding(str, target) {
  // return str.endsWith(target);
  return str.slice(-target.length) === target;
}

confirmEnding('Bastian', 'n');
