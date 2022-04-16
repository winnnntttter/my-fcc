function whatIsInAName(collection, source) {
  const arr = [];
  const keys = Object.keys(source);
  /* for (let i = 0; i < collection.length; i++) {
    let flag = true;
    for (let j = 0; j < keys.length; j++) {
      if (collection[i][keys[j]] !== source[keys[j]]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      arr.push(collection[i]);
    }
  } */
  collection.forEach(function (e) {
    if (
      keys.every(function (key) {
        return e[key] === source[key];
      })
    ) {
      arr.push(e);
    }
  });
  return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);
