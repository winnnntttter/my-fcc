// reduce方法是处理数组更通用的方式，而且filter和map方法都可以当作是reduce的特殊实现。 reduce方法遍历数组中的每个项目并返回单个值（即字符串、数字、对象、数组）。 这是通过在每次迭代中调用一个回调函数来实现的。
// 回调函数接受四个参数。 第一个参数称为叠加器，它是上一次迭代中回调函数的返回值，第二个参数是当前正在处理的数组元素，第三个参数是该参数的索引，第四个参数是在其上调用 reduce 方法的数组。
// 除了回调函数，reduce 还有一个额外的参数做为叠加器的初始值。 如果没有第二个参数，会跳过第一次迭代，第二次迭代给叠加器传入数组的第一个元素。

// 返回一个包含用户名称做为属性，其年龄做为值的对象。
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }

// 使用 reduce 查找由 Christopher Nolan 导演的电影的 IMDB 评级平均值。
const movies = [
  { title: 'The Dark Knight', year: 2008, imdbRating: 9, Director: 'Christopher Nolan' },
  { title: "The King's Speech", year: 2010, imdbRating: 8.5, Director: 'Christopher Nolan' },
  { title: 'The Prestige', year: 2006, imdbRating: 8.5, Director: 'Christopher Nolan' },
  { title: 'The Lion King', year: 1994, imdbRating: 8.1, Director: 'Christopher Nolan' },
  { title: 'The Avatar', year: 2009, imdbRating: 7.9, Director: 'Christopher Nolan' }
];

function average(array) {
  // let averageimdbRating;
  // const imdbRating = array.filter(obj => obj.Director === 'Christopher Nolan').map(obj => Number(obj.imdbimdbRating));
  // averageimdbRating = imdbRating.reduce((accum, curr) => accum + curr) / imdbRating.length;
  // return averageimdbRating;

  let averageimdbRating,
    count = 0;
  averageimdbRating =
    array.reduce(function (accum, curr) {
      if (curr.Director === 'Christopher Nolan') {
        count += 1;
        accum += Number(curr.imdbRating);
      }
      return accum;
    }, 0) / count;
  return averageimdbRating;
}

console.log(average(movies));
