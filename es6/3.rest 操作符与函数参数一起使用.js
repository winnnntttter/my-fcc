// ES6 推出了用于函数参数的 rest 操作符帮助我们创建更加灵活的函数。 rest 操作符可以用于创建有一个变量来接受多个参数的函数。 这些参数被储存在一个可以在函数内部读取的数组中
function howMany(...args) {
  return 'You have passed ' + args.length + ' arguments.';
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany('string', null, [1, 2, 3], {})); // You have passed 4 arguments.

// 使用 rest 参数，就不需要查看 args 数组，并且允许我们在参数数组上使用 map()、filter() 和 reduce()

// 使用 rest 参数，使 sum 函数可以接收任意数量的参数，并返回它们的总和。
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
// const sum = (...args) => args.reduce((a, b) => a + b, 0); // ES6 匿名函数
console.log(sum(1, 2, 3)); // 6
