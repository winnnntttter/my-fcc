// - 如果单词以辅音开头，就把第一个辅音字母或第一组辅音簇移到单词的结尾，并在后面加上 ay。
// - 如果单词以元音开头，只需要在结尾加上 way。
function translatePigLatin(str) {
  var regex = /[aeiou]/;
  if (regex.test(str[0])) {
    return str + 'way';
  }
  var front = [];
  str = str.split('');
  while (str.length && !regex.test(str[0])) {
    front.push(str.shift());
  }
  return [].concat(str, front).join('') + 'ay';
}

console.log(translatePigLatin('rhythm'));
