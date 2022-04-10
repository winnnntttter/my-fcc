// splice 方法会改变调用它的原始数组。
function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}

const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
nonMutatingSplice(inputCities);


// push 将元素添加到调用它的数组的末尾，这样会改变该数组。
// 使用 concat 方法组合两个数组 它返回一个新数组，不会改变任何一个原始数组。
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
