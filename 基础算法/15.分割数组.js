// 请编写一个函数，该函数将一个数组（第一个参数）拆分成若干长度为 size（第二个参数）的子数组，并将它们作为二维数组返回。
function chunk(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + dog.numLegs + ' legs.';
  }
};

console.log(dog.sayLegs()); // This dog has 4 legs.
