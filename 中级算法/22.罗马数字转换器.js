// 把传入的数字转为罗马数字。

// 转换后的罗马数字字母必须都是大写。
function convertToRoman(num) {
  var roman = '';
  var map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  for (var key in map) {
    while (num >= map[key]) {
      roman += key;
      num -= map[key];
    }
  }
  return roman;
}

convertToRoman(36);

function convertToRoman(num) {
  var ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  var res = [];
  ref.forEach(function (p) {
    while (num >= p[1]) {
      res.push(p[0]);
      num -= p[1];
    }
  });
  return res.join('');
}
