// 有时候我们想使用正则表达式里的括号 () 来检查字符组。

// 如果想在字符串找到 Penguin 或 Pumpkin，可以用这个正则表达式：/P(engu|umpk)in/g。

// 完善正则表达式，使其以区分大小写的方式检查 Franklin Roosevelt 或 Eleanor Roosevelt 的名字，并且应该忽略 middle names。
let myString = 'Eleanor Roosevelt';
let myRegex = /(Franklin|Eleanor) (.+ )?Roosevelt/;
myRegex.test(myString); // true