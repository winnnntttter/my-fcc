function truthCheck(collection, pre) {
  // for (var i = 0; i < collection.length; i++) {
  //   if (!collection[i][pre]) {
  //     return false;
  //   }
  // }
  // return true;
  return collection.every(function(e) { return e[pre]; });
}

truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true }
  ],
  'isBot'
);
