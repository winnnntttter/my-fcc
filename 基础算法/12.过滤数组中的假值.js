// 从数组中移除所有假值（falsy values）
// false、null、0、""、undefined、NaN
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}
console.log(bouncer([7, 'ate', '', false, 9])); // [7, "ate", 9]
