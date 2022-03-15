// 贪婪（greedy）匹配会匹配到符合正则表达式匹配模式的字符串的最长可能部分，并将其作为匹配项返回。 另一种方案称为懒惰（lazy）匹配，它会匹配到满足正则表达式的字符串的最小可能部分。

// 正则表达式默认是贪婪匹配
let reg = /t[a-z]*i/;
console.log('titanic'.match(reg)); // ["titanic"]

// 使用 ? 字符来将其变成懒惰匹配
let reg2 = /t[a-z]*?i/;
console.log('titanic'.match(reg2)); // ["ti"]

let text = '<h1>Winter is coming</h1>';
let myRegex = /<.*>/; // 修改这一行
console.log(text.match(myRegex)); // ["<h1>Winter is coming</h1>"]
let myRegex2 = /<.*?>/; // 修改这一行
console.log(text.match(myRegex2)); // ["<h1>"]

// ? 也可看做是不是含有都能匹配 
// 可以使用问号 ? 指定可能存在的元素。 这将检查前面的零个或一个元素。 可以将此符号视为前面的元素是可选的。
let reg3 = /\d+a?/;
console.log('123'.match(reg3)); // ["123"]
console.log('123a'.match(reg3)); // ["123a"]
console.log('123aaa'.match(reg3)); // ["123a"]
