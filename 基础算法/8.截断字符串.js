// 如果传入的字符串（第一个参数）的长度大于传入的值（第二个参数），请在这个位置截断它， 并在后面加上 ...，然后返回结果。
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
