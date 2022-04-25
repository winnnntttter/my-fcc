function smallestCommons(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var result = max;
  for (var i = max; i >= min; i--) {
    result = lcm(result, i);
  }
  return result;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}


// 1. 代码是针对a和b是正整数的情况编写的。
// 2. 函数gcd(a, b)返回a和b的最大公除数。
// 3. 3.函数gcd(a, b)需要两个参数，a和b。
// 4. 4. 如果b不为零，函数gcd(a, b)返回b。
// 5. 5. 如果b不为零，函数gcd(a, b)返回a mod b。
// 6. 6. 如果b为零，函数gcd(a, b)返回a。
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

smallestCommons([1, 5]);

// function gcd(a, b) {
//   while (b !== 0) {
//     a = [b, (b = a % b)][0];
//   }
//   return a;
// }

// function lcm(a, b) {
//   return (a * b) / gcd(a, b);
// }

// function smallestCommons(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   var rng = [];
//   for (var i = arr[0]; i <= arr[1]; i++) {
//     rng.push(i);
//   }
//   return rng.reduce(lcm);
// }
