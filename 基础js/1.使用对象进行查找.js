function phoneticLookup(val) {
  let result = '';

  // 只修改这一行下面的代码
  const lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
  };
  result = lookup[val];
  // 只修改这一行上面的代码
  return result;
}

phoneticLookup('charlie');
