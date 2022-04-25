function fearNotLetter(str) {
  // var arr = str.split('');
  // var result = [];
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i].charCodeAt(0) !== arr[0].charCodeAt(0) + i) {
  //     result.push(arr[i].charCodeAt(0) - 1);
  //   }
  // }
  // return result.length === 0 ? undefined : String.fromCharCode(result[0]);
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    var letter = String.fromCharCode(i);
    if (str.indexOf(letter) === -1) {
      return letter;
    }
  }

  return undefined;
}

fearNotLetter('abce');

console.log(fearNotLetter('abce'));
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
