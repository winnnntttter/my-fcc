// 回文 palindrome，指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。
// 注意：检查回文时，你需要先去除所有非字母数字的字符（标点、空格和符号），并将所有字母都转换成大写或都转换成小写。
function palindrome(str) {
  var reg = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(reg, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome('eye');

function palindrome(str) {
  var string = str
    .toLowerCase()
    .split(/[^A-Za-z0-9]/gi)
    .join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')) {
    return true;
  }

  return false;
}
