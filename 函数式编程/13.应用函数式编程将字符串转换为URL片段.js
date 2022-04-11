// 许多内容管理站点（CMS）为了让添加书签更简单，会将帖子的标题添加到 URL 上。 举个例子，如果你写了一篇标题为 Stop Using Reduce 的帖子，URL很可能会包含标题字符串的某种形式 (如：.../stop-using-reduce)

// 填写 urlSlug 函数，将字符串 title 转换成带有连字符号的 URL。 您可以使用本节中介绍的任何方法，但不要用 replace 方法。 以下是本次挑战的要求：
// 输入包含空格和标题大小写单词的字符串
// 输出字符串，单词之间的空格用连字符 (-) 替换
// 输出应该是小写字母
// 输出不应有任何空格

// 只修改这一行下面的代码
function urlSlug(title) {
  // 在此处写入代码
  return title.split(' ').filter(Boolean).join('-').toLowerCase();
}
// 只修改这一行上面的代码
urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone');
