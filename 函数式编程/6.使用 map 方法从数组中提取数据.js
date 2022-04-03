// 请记住，map方法是迭代数组中每一项的方式之一。 在对每个元素应用回调函数后，它会创建一个新数组(不改变原来的数组)。 它这样做时没有改变原始数组。
// 当调用回调函数时，传入了三个参数。 第一个参数是当前正在处理的数组项。 第二个参数是当前数组项的索引值，第三个参数是在其上调用 map 方法的数组。

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const names = users.map(user => user.name);
// console.log(names); // ['John', 'Amy', 'camperCat']

// 全局变量
const watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True'
  }
];

// 新数组中的每个电影都只能有一个值为电影名称的 title 键，和一个值为 IMDB 评级的 rating 键。
// 只修改这一行下面的代码

// const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//   ratings.push({ title: watchList[i]['Title'], rating: watchList[i]['imdbRating'] });
// }

const ratings = watchList.map(movie => ({ title: movie['Title'], rating: movie['imdbRating'] }));

// 只修改这一行上面的代码

console.log(JSON.stringify(ratings));

// 在原型上实现 map 方法 用 for 循环或者 Array.prototype.forEach() 方法。

// 全局变量
const s = [23, 65, 98, 5];

// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function (callback) {
  const newArray = [];
  // 只修改这一行下面的代码
  // for (let i = 0; i < this.length; i++) {
  //   newArray.push(callback(this[i], i, this));
  // }
  this.forEach((item, index, array) => {
    newArray.push(callback(item, index, array));
  });

  // 只修改这一行上面的代码
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});

console.log(new_s);
