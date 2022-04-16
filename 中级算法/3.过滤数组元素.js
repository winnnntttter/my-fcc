function destroyer(arr) {
  // Remove all the values
  /* var args = Array.prototype.slice.call(arguments);
  arr = args.shift();
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === args[i]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr; */
  var args = [...arguments];
  arr = args.shift();
  return arr.filter(function(item) {
    return args.indexOf(item) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
