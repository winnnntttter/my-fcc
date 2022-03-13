// Promise 是异步编程的一种解决方案 - 它在未来的某时会生成一个值。 任务完成，分执行成功和执行失败两种情况。 Promise 是构造器函数，需要通过 new 关键字来创建。 构造器参数是一个函数，该函数有两个参数 - resolve 和 reject。 通过它们来判断 promise 的执行结果。 用法如下：
// 上面的示例使用字符串作为这些函数的参数，但参数实际上可以是任何格式。 通常，它可能是一个包含数据的对象，你可以将它放在网站或其他地方。
var a;
const myPromise = new Promise((resolve, reject) => {
  if (a === 1) {
    resolve('Promise was fulfilled');
  } else {
    // reject('Promise was rejected');
    reject(new Error('Promise was rejected'));
  }
});

// 当程序需要花费未知的时间才能完成时（比如一些异步操作），一般是服务器请求，promise 很有用。 服务器请求会花费一些时间，当结束时，需要根据服务器的响应执行一些操作。 这可以用 then 方法来实现， 当 promise 完成 resolve 时会触发 then 方法的回调函数。
myPromise
  .then(result => {
    console.log(result); // Promise was fulfilled
  })
  .catch(error => {
    console.log(error); // Error: Promise was rejected
  });
