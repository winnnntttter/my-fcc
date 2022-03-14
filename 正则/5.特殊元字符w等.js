// \w。 这个缩写等同于[A-Za-z0-9_]

// 可以使用 \W 搜寻和 \w 相反的匹配模式 [^A-Za-z0-9_]

let quoteSample = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length; // 返回匹配到的字符串的个数 6

// \d，注意是小写的 d。 这等同于元字符 [0-9]
// \D。 这等同于字符串 [^0-9]

// 用户名只能是数字字母字符。
// 用户名中的数字必须在最后。 数字可以有零个或多个。 用户名不能以数字开头。
// 用户名字母可以是小写字母和大写字母。
// 用户名长度必须至少为两个字符。 两位用户名只能使用字母。
let reg = /^[a-z]([a-z]+|\d{2,})\d*$/i;


// \s 搜寻空格，其中 s 是小写。 此匹配模式将匹配空格、回车符、制表符、换页符和换行符 相当于 [ \r\t\f\n\v]