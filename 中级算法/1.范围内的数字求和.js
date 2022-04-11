// 例如，sumAll([4,1]) 应返回 10，因为从 1 到 4（包含 1、4）的所有数字的和是 10。
function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum = 0;
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
