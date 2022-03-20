// 如果数组里的第一个字符串包含了第二个字符串中的所有字母，则返回 true。
function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  for (var i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      return false;
    }
  }
  return true;
}
