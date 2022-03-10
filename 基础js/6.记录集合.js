const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// 函数必须始终返回整个音乐专辑集合对象。
// 如果 prop 不是 tracks 并且 value 不是一个空字符串， 将专辑的 prop 更新或设置为 value。
// 如果 prop 是 tracks 但专辑没有 tracks 属性，则应创建空数组并为其添加 value。
// 如果 prop 是 tracks 并且 value 不是一个空字符串，将 value 添加到专辑现有 tracks 数组的末尾。
// 如果 value 是空字符串，从专辑里删除指定的 prop。
// 只修改这一行下面的代码
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  } else if (prop === 'tracks' && !records[id].hasOwnProperty('tracks')) {
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value !== '') {
    records[id][prop].push(value);
  } else if (value === '') {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
