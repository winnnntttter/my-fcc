// 在这道题目中，我们需要写一个计算天体轨道周期（单位是秒）的函数。

// 它接收一个对象数组参数 arr，对象中包含表示天体名称的 name 属性，及表示天体表面平均海拔的 avgAlt 属性。 就像这样：{name: 'name', avgAlt: avgAlt}。
// 地球半径为 6367.4447 公里，地球的 GM 值为 398600.4418 km 3 s -2 。
// https://en.wikipedia.org/wiki/Orbital_period

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const alt = obj.avgAlt;
    const a = Math.pow(earthRadius + alt, 3);
    const b = 2 * Math.PI * Math.sqrt(a / GM);
    const c = Math.round(b);
    result.push({
      name: obj.name,
      orbitalPeriod: c
    });
  }
  return result;
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);


function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const TAU = 2 * Math.PI;
  return arr.map(function(obj) {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(TAU * Math.sqrt(Math.pow(obj.avgAlt+earthRadius, 3)/GM))
    };
  });
}