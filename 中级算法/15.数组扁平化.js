// 嵌套数组扁平化成一维数组。
function steamrollArray(arr) {
  var result = [];
  function steamroll(arr) {
    arr.forEach(function (item) {
      if (Array.isArray(item)) {
        steamroll(item);
      } else {
        result.push(item);
      }
    });
  }
  steamroll(arr);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);

// function steamrollArray(arr) {
//   if (!Array.isArray(arr)) {
//     return [arr];
//   }
//   var out = [];
//   arr.forEach(function (e) {
//     steamrollArray(e).forEach(function (v) {
//       out.push(v);
//     });
//   });
//   return out;
// }
