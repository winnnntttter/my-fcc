// 需要写一个字符串的搜索与替换函数，它的返回值为完成替换后的新字符串。
// 这个函数接收的第一个参数为待替换的句子。
// 第二个参数为句中需要被替换的单词。
// 第三个参数为替换后的单词。
// 在更换原始单词时保留原始单词中第一个字符的大小写。 即如果传入的第二个参数为 Book，第三个参数为 dog，那么替换后的结果应为 Dog

function myReplace(str, before, after) {
  var regex = /[A-Z]/;
  var regex2 = /[a-z]/;
  if (regex.test(before[0])) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  if (regex2.test(before[0])) {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);

  // if (before.charAt(0) === before.charAt(0).toUpperCase()) {
  //   after = after.charAt(0).toUpperCase() + after.substring(1);
  // } else {
  //   after = after.charAt(0).toLowerCase() + after.substring(1);
  // }
  // return str.replace(before, after);
}

console.log(myReplace('I think we should look up there', 'up', 'Down'));
