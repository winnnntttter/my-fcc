// Callbacks 是被传递到另一个函数中调用的函数。 你应该已经在其他函数中看过这个写法，例如在 filter 中，回调函数告诉 JavaScript 以什么规则过滤数组。
// 函数就像其他正常值一样，可以赋值给变量、传递给另一个函数，或从其它函数返回，这种函数叫做头等 first class 函数。 在 JavaScript 中，所有函数都是头等函数。
// 将函数为参数或返回值的函数叫做高阶 ( higher order) 函数。
// 当函数被传递给另一个函数或从另一个函数返回时，那些传入或返回的函数可以叫做 lambda。

// 函数返回表示“一杯绿茶（green tea）”的字符串
const prepareGreenTea = () => 'greenTea';

// 函数返回表示“一杯红茶（black tea）”的字符串
const prepareBlackTea = () => 'blackTea';

/*
有一个函数（代表茶的种类）和需要几杯茶，下面的函数返回一个数组，包含字符串（每个字符串表示一杯特别种类的茶）。
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
