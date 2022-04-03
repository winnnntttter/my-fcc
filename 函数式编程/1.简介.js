// 函数式编程是一种方案简单、功能独立、对作用域外没有任何副作用的编程范式：INPUT -> PROCESS -> OUTPUT。
// 函数式编程：
// 1）功能独立——不依赖于程序的状态（比如可能发生变化的全局变量）；
// 2）纯函数——同一个输入永远能得到同一个输出；
// 3）有限的副作用——可以严格地限制函数外部对状态的更改。

// 函数返回表示“一杯绿茶（green tea）”的字符串
const prepareTea = () => 'greenTea';

/*
有一个函数（代表茶的种类）和需要几杯茶，下面的函数返回一个数组，包含字符串（每个字符串表示一杯特别种类的茶）。
*/
const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC); //
