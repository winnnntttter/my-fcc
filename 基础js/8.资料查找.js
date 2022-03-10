// 我们有一个对象数组，里面存储着通讯录。
// lookUpProfile 函数已经写好了参数，需要 name 和属性 (prop) 参数。
// 函数将会检查通讯录中是否存在一个 firstName 与传入的 name 相同的联系人。 如果存在，那么还需要检查对应的联系人中是否存在 prop 属性。
// 如果它们都存在，函数返回 prop 属性对应的值。
// 如果 name 不对应于任何联系人，然后返回字符串 No such contact。
// 如果 prop 属性在匹配 name 的联系人里不存在，返回 No such property。

const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin']
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes']
  }
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}

lookUpProfile('Akira', 'likes');
