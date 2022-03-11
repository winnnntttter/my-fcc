// ES6 提供了其他写匿名函数的方式的语法糖。 你可以使用箭头函数：
// ES6 里允许给函数传入默认参数，来构建更加灵活的函数。
// 当不需要函数体，只返回一个值的时候，箭头函数允许你省略 return 关键字和外面的大括号。 这样就可以将一个简单的函数简化成一个单行语句。
// const myFunc = () => "value";


const greeting = (name = 'Anonymous') => 'Hello ' + name;

console.log(greeting('John')); // Hello John
console.log(greeting()); // Hello Anonymous
