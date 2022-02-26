function phoneticLookup(val) {
  let result = "";
  const lookup = {};
  // 只修改这一行下面的代码
  switch (val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // 只修改这一行上面的代码
  return result;
}

phoneticLookup("charlie");
