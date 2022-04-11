// 比较两个数组并返回一个新数组，包含所有只在其中一个数组中出现的元素，排除两个数组都存在的元素。
function diffArray(arr1, arr2) {
  const newArr = [];
  /* for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  } */
  /* var arr1Set = new Set(arr1);
  var arr2Set = new Set(arr2);
  arr1Set.forEach(item => {
    if (!arr2Set.has(item)) {
      newArr.push(item);
    }
  });
  arr2Set.forEach(item => {
    if (!arr1Set.has(item)) {
      newArr.push(item);
    }
  }); */
  /* arr1.forEach(item => {
    if (arr2.indexOf(item) === -1) {
      newArr.push(item);
    }
  });
  arr2.forEach(item => {
    if (arr1.indexOf(item) === -1) {
      newArr.push(item);
    }
  }); */
  // var newArr1 = arr1.filter(item => arr2.indexOf(item) === -1);
  // var newArr2 = arr2.filter(item => arr1.indexOf(item) === -1);
  // return newArr1.concat(newArr2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
