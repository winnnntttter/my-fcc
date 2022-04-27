// 凯撒密码（ Caesar cipher）是最简单且最广为人知的密码（ciphers），也被称为移位密码（shift cipher）。 在移位密码中，明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。
// ROT13 是一个被广泛使用的加密技术，明文中的所有字母都被移动 13 位。 也就是， A ↔ N，B ↔ O 等等。

function rot13(str) {
  var arr = str.split('');
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90) {
      result.push(String.fromCharCode(((arr[i].charCodeAt() - 65 + 13) % 26) + 65));
    } else if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122) {
      result.push(String.fromCharCode(((arr[i].charCodeAt() - 97 + 13) % 26) + 97));
    } else {
      result.push(arr[i]);
    }
  }
  return result.join('');
}

rot13('SERR PBQR PNZC');

var lookup = {
  A: 'N',
  B: 'O',
  C: 'P',
  D: 'Q',
  E: 'R',
  F: 'S',
  G: 'T',
  H: 'U',
  I: 'V',
  J: 'W',
  K: 'X',
  L: 'Y',
  M: 'Z',
  N: 'A',
  O: 'B',
  P: 'C',
  Q: 'D',
  R: 'E',
  S: 'F',
  T: 'G',
  U: 'H',
  V: 'I',
  W: 'J',
  X: 'K',
  Y: 'L',
  Z: 'M'
};

function rot13(encodedStr) {
  var codeArr = encodedStr.split(''); // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line

  decodedArr = codeArr.map(function (letter) {
    if (lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // Only change code above this line
  return decodedArr.join(''); // Array to String
}
