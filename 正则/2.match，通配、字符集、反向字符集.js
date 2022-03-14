// .match 语法是目前为止一直使用的 .test 方法中的“反向”
'Hello, World!'.match(/Hello/); // ["Hello"]
'World!'.match(/Hello/); // null

// 若要多次搜寻或提取模式匹配，可以使用 g 标志。
// 带g返回匹配的数组，不带g返回匹配的全部信息
let testStr = 'Repeat, Repeat, Repeat';
let ourRegex = /Repeat/;
testStr.match(ourRegex); // ['Repeat', index: 0, input: 'Repeat, Repeat, Repeat', groups: undefined]
let ourRegex2 = /Repeat/g;
testStr.match(ourRegex2); // ["Repeat", "Repeat", "Repeat"]

// 有时不（或不需要）知道匹配模式中的确切字符。 如果要精确匹配到完整的单词，那出现一个拼写错误就会匹配不到。 幸运的是，可以使用通配符 . 来处理这种情况。
let bgRegex1 = /bg./;

// 已经了解了文字匹配模式（/literal/）和通配符（/./）。 这是正则表达式的两种极端情况，一种是精确匹配，而另一种则是匹配所有。 在这两种极端情况之间有一个平衡选项。

// 可以使用字符集 （character classes）更灵活的匹配字符。 可以把字符集放在方括号（[ 和 ]）之间来定义一组需要匹配的字符串。

let bgRegex2 = /b[aiu]g/;

let quoteSample = 'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi;
// let vowelRegex = /a|e|i|o|u/gi; // 同上
console.log(quoteSample.match(vowelRegex)); // ['e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e', 'I', 'a', 'e', 'o', 'o', 'e', 'i', 'o', 'e', 'o', 'i', 'e', 'i'];

// 可以使用连字符（-）来定义要匹配的字符范围
let bgRegex3 = /[a-e]at/;

// 要创建否定字符集，需要在开始括号后面和不想匹配的字符前面放置脱字符（即^）
let bgRegex4 = /[^aeiou]/gi; // 反向字符集，非元音字符
// /[^aeiou0-9]/gi // 反向字符集，非元音字符和数字

// 除了在字符集中使用之外，脱字符还用于匹配字符串的开始位置
let firstString = 'Ricky is first and can be found.';
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // true

// $ 来搜寻字符串的结尾
