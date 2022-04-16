// 将字符串转换为短线连接格式。 短线连接格式是小写单词全部小写并以破折号分隔。
function spinalCase(str) {
  /* return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase(); */
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}

spinalCase('This Is Spinal Tap');
