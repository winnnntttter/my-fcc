// 命令式编程常常改变程序状态，例如更新全局变量。 一个典型的例子是编写 for 循环，它为一个数组的索引提供了准确的迭代方向。
// 相反，函数式编程是声明式编程的一种形式。 通过调用方法或函数来告诉计算机要做什么。

// JavaScript 提供了许多处理常见任务的方法，所以你无需写出计算机应如何执行它们。 例如，你可以用 map 函数替代上面提到的 for 循环来处理数组迭代。 这有助于避免语义错误，如调试章节介绍的 "Off By One Errors"。

// 考虑这样的场景：你正在浏览器中浏览网页，并想操作你打开的标签。 下面我们来试试用面向对象的思路来描述这种情景。

// 窗口对象由选项卡组成，通常会打开多个窗口。 窗口对象中每个打开网站的标题都保存在一个数组中。 在对浏览器进行了如打开新标签、合并窗口、关闭标签之类的操作后，你需要输出所有打开的标签。 关掉的标签将从数组中删除，新打开的标签（为简单起见）则添加到数组的末尾。

// 面向对象方式
// tabs 是在窗口中打开的每个站点的 title 的数组
const Window = function (tabs) {
  this.tabs = tabs; // 我们记录对象内部的数组
};

// 当你将两个窗口合并为一个窗口时
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// 当你在最后打开一个选项卡时
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // 我们现在打开一个新的选项卡
  return this;
};

// 当你关闭一个选项卡时
Window.prototype.tabClose = function (index) {
  // 只修改这一行下面的代码
  // 之前用的splice方法
  const tabsBeforeIndex = this.tabs.slice(0, index); // 点击之前获取 tabs
  const tabsAfterIndex = this.tabs.slice(index + 1); // 点击之后获取 tabs

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // 将它们合并起来

  // 只修改这一行上面的代码

  return this;
};

// 我们创建三个浏览器窗口
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // 你的邮箱、Google Drive 和其他工作地点
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // 社交网站
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // 娱乐网站

// 现在执行打开选项卡，关闭选项卡和其他操作
const finalTabs = socialWindow
  .tabOpen() // 打开一个新的选项卡，显示猫的图片
  .join(videoWindow.tabClose(2)) // 关闭视频窗口的第三个选项卡，并合并
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
