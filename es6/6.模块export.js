// <script type="module" src="filename.js"></script>
// ES6 引入了在多个 JavaScript 文件之间共享代码的机制。 它可以导出文件的一部分供其它文件使用，然后在需要它的地方按需导入。 为了使用这一功能， 需要在 HTML 文档里创建一个 type 为 module 的脚本
// 使用了 module 类型的脚本可以使用 import 和 export 特性

// 导出单个函数常用方法
export const add = (x, y) => {
  return x + y;
};
export const add2 = (x, y) => {
  return x + 2 * y;
};
// 等同于
const add3 = (x, y) => {
  return x + y;
};
const add4 = (x, y) => {
  return x + 2 * y;
};
export { add3, add4 };


// 默认导出的 export 的语法。 在文件中只有一个值需要导出的时候，通常会使用这种语法。 它也常常用于给文件或者模块创建返回值
// 第一个是命名函数，第二个是匿名函数。
// 在每个文件或者模块中应当只默认导出一个值。 此外，你不能将 export default 与 var、let 或 const 同时使用。
// export default function add5(x, y) {
//   return x + y;
// }
export default function(x, y) {
  return x + y;
}