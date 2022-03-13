// import { add3, add4 } from './6.模块export.js';
// console.log(add3(1, 2), add4(1, 2)); // 3, 6

// 使用 import * as 语法将文件的所有内容导入对象
// import * as a from './模块export.js';
// console.log(a); // { add3: [Function: add3], add4: [Function: add4] }



// 还需要一种 import 的语法来导入默认的导出。
// 被导入的 add 值没有被花括号（{}）所包围。 add 只是一个变量的名字，对应 math_functions.js 文件的任何默认导出值。 在导入默认导出时，可以使用任何名字。
import add6 from './6.模块export.js';
console.log(add6(1, 2)); // 3
