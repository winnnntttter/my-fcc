// 匹配出现一次或多次的字符
// /a+/g 会在 abc 中匹配到一个匹配项，并且返回 ["a"]。 因为 + 的存在，它也会在 aabc 中匹配到一个匹配项，然后返回 ["aa"]。
// 如果它是检查字符串 abab，它将匹配到两个匹配项并且返回["a", "a"]，因为a字符不连续
let difficultSpelling = 'Mississippi';
let myRegex = /s+/g; // 修改这一行
let result = difficultSpelling.match(myRegex);
console.log(result); // ["ss", "ss"]

// 匹配出现零次或多次的字符

let soccerWord = 'gooooooooal!';
let gPhrase = 'gut feeling';
let oPhrase = 'over the moon';
let goRegex = /go*/;
console.log(soccerWord.match(goRegex)); // ['goooooooo', index: 0, input: 'gooooooooal!', groups: undefined]
console.log(gPhrase.match(goRegex)); // ['g', index: 0, input: 'gut feeling', groups: undefined]
console.log(oPhrase.match(goRegex)); // null
