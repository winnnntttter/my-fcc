// 编写一个带有两个或更多数组的函数，并按原始提供的数组的顺序返回一个新的唯一值数组。
function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (result.indexOf(args[i][j]) === -1) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
  // return [].slice.call(arguments).reduce(function(a, b) {
  //   return [].concat(
  //     a, 
  //     b.filter(function(e, currentIndex) {
  //       return b.indexOf(e) === currentIndex && a.indexOf(e) === -1;
  //     }));
  // }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
