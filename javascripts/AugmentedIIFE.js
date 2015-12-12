fruitMaker.prototype.slices = function(fruit, slices) {
  var sliced = [];
  for(c = 0; c < slices; c ++ ) {
    sliced = sliced + fruit;
  };
  return sliced;
};
