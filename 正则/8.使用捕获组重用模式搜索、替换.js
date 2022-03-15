// 当你想要匹配一个像下面这样多次出现的单词，
// let repeatStr = "row row row your boat";
// 你可以使用 /row row row/。但如果你不知道重复的特定单词，怎么办？ 捕获组 可以用于找到重复的子字符串。

// 捕获组是通过把要捕获的正则表达式放在括号中来构建的。 在这个例子里， 目标是捕获一个包含字母数字字符的词，所以捕获组是将 \w+ 放在括号中：/(\w+)/。

// 分组匹配的子字符串被保存到一个临时的“变量”， 可以使用同一正则表达式和反斜线及捕获组的编号来访问它（例如：\1）。 捕获组按其开头括号的位置自动编号（从左到右），从 1 开始。
let repeatStr = 'row row row your boat';
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
// 在字符串上调用 .match() 方法将返回一个数组，其中包含它最终匹配到的子字符串及其捕获组。

// 使用捕获组来匹配一个只由相同的数字重复三次组成的由空格分隔字符串
let repeatNumStr = '42 42 42';
let repeatNumRegex = /^(\d+)\s\1\s\1$/;
repeatNumRegex.test(repeatNumStr); // Returns true

// 使用捕获组搜索和替换

// 可以在字符串上使用 .replace() 方法来搜索并替换字符串中的文本。 .replace() 的输入首先是想要搜索的正则表达式匹配模式。 第二个参数是用于替换匹配的字符串或用于执行某些操作的函数。
// 还可以使用美元符号（$）访问替换字符串中的捕获组
'Code Camp'.replace(/(\w+)\s(\w+)/, '$2 $1'); // Returns "Camp Code"

// 编写一个正则表达式并使用适当的字符串方法删除字符串开头和结尾的空格。
let hello = '   Hello, World!  ';
let wsRegex = /^\s+|\s+$/g;
hello.replace(wsRegex, ''); // Returns "Hello, World!"
