// 创建一个将两个参数相加的函数。 如果只提供了一个参数，则返回一个需要一个参数并返回总和的函数。
function addTogether() {
  var args = Array.prototype.slice.call(arguments);
  if (args.length === 1) {
    if (typeof args[0] !== 'number') {
      return undefined;
    }
    return function (n) {
      if (typeof n !== 'number') {
        return undefined;
      }
      return args[0] + n;
    };
  }
  if (args.length === 2) {
    if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
      return undefined;
    }
    return args[0] + args[1];
  }
}

addTogether(2, 3);

function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}