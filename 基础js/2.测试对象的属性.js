function checkObj(obj, checkProp) {
  // 只修改这一行下面的代码
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';
  // 只修改这一行上面的代码
}

// hasOwnPropert()方法返回值是一个布尔值，指示对象自身属性中是否具有指定的属性，因此这个方法会忽略掉那些从原型链上继承到的属性。

// 另一个是使用 in 关键字。包含原型链上的属性
// 'Alan' in users; // true

// Object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致；

// 遍历的是某个对象的自身属性
for (let key in Object.keys(users)) {
  console.log(key);
}

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // 修改这一行
  // userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah ') && userObj.hasOwnProperty('Ryan'); // 失败
  return 'Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj;
  // 修改这一行
}
console.log(Object.keys(users)); // [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
console.log(isEveryoneHere(users)); // true

// 获取对象的长度
// 使用 Object.keys() 方法来获取对象的键名，然后使用 .length 属性来获取键名的长度。

const users2 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
};

function countOnline(usersObj) {
  // 只修改这一行下面的代码
  // return Object.keys(usersObj).filter(key => usersObj[key].online).length;
  let count = 0;
  for (let key in usersObj) {
    if (usersObj[key].online) {
      count++;
    }
  }
  return count;
  // 只修改这一行上面的代码
}

console.log(countOnline(users2));
