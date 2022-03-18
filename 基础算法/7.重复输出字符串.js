// 将一个给定的字符串 str（第一个参数）重复输出 num（第二个参数）次。 如果 num 不是正数，返回空字符串
// 不用repeat
function repeatStringNumTimes(str, num) {
  // return num > 0 ? str.repeat(num) : '';
  var result = '';
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}

repeatStringNumTimes('abc', 3);
