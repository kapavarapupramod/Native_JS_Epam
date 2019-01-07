function partitionOn(pred, items) {
  debugger;
  var filterTrue = [];
  var filterFalse = [];
  items.forEach(function(value) {
      (pred(value) ? filterTrue : filterFalse).push(value);
  });
  items.length = 0;
  items.push.apply(items,filterFalse);
  items.push.apply(items,filterTrue);
  return filterFalse.length;
}