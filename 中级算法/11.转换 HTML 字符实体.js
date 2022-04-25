// 将字符串中的 &、<、>、"（双引号）和 '（单引号）转换为相应的 HTML 字符实体。
// function convertHTML(str) {
//   // &colon;&rpar;
//   var reg = /&/g;
//   str = str.replace(reg, '&amp;');
//   reg = /</g;
//   str = str.replace(reg, '&lt;');
//   reg = />/g;
//   str = str.replace(reg, '&gt;');
//   reg = /"/g;
//   str = str.replace(reg, '&quot;');
//   reg = /'/g;
//   str = str.replace(reg, '&apos;');

//   return str;
// }


var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function (c) {
    return MAP[c];
  });
}
