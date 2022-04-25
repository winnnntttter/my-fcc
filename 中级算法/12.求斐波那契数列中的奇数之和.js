// 参数为一个正整数 num，返回值为斐波那契数列中，小于或等于 num 的奇数之和。
function sumFibs(num) {
  var fib = [1, 1];
  var sum = 0;
  while (fib[fib.length - 1] <= num) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  for (var i = 0; i < fib.length; i++) {
    if (fib[i] % 2 !== 0 && fib[i] <= num) {
      sum += fib[i];
    }
  }
  return sum;
}

console.log(sumFibs(4));


function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}