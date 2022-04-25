// DNA 的碱基对 有两种形式：一种是 A 与 T，一种是 C 与 G。 请为参数中给出的每个字符配对相应的碱基。
// 注意，参数中给出的字符应作为每个子数组中的第一个元素返回。
// 例如，传入 GCG 时，应返回 [["G", "C"], ["C","G"], ["G", "C"]]。

function pairElement(str) {
  var arr = str.split('');
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'A':
        result.push(['A', 'T']);
        break;
      case 'T':
        result.push(['T', 'A']);
        break;
      case 'C':
        result.push(['C', 'G']);
        break;
      case 'G':
        result.push(['G', 'C']);
        break;
    }
  }
  return result;
}

pairElement('GCG');

// var lookup = Object.create(null);
// lookup.A = 'T';
// lookup.T = 'A';
// lookup.C = 'G';
// lookup.G = 'C';

// function pairElement(str) {
//   return str.split('').map(function (p) {
//     return [p, lookup[p]];
//   });
// }
