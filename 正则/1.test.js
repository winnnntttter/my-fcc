// 测试正则表达式的一种方法是使用 .test() 方法。 .test() 方法会把编写的正则表达式和字符串（即括号内的内容）匹配，如果成功匹配到字符，则返回 true，反之，返回 false。
let testStr = 'freeCodeCamp';
let testRegex = /Code/;
testRegex.test(testStr); // true

let petString = 'James has a pet cat.';
// 匹配 dog、cat、bird 或者 fish 忽略大小写
let petRegex = /dog|cat|bird|fish/i;
petRegex.test(petString); // true
