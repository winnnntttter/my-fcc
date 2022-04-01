(function () {
  console.log('Chirp, chirp!');
})();
// 函数没有名称，也不存储在变量中。 函数表达式末尾的两个括号（）会让它被立即执行或调用。 这种模式被叫做立即调用函数表达式（immediately invoked function expression) 或者IIFE。

// 另一种形式
// 用来调用的() 被移进用来包装的() 中。
(function () {
  console.log('Chirp, chirp!');
}());
