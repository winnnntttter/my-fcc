function findLongestWordLength(str) {
  return str.split(' ').reduce(function (max, word) {
    return Math.max(max, word.length);
  }, 0);
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
