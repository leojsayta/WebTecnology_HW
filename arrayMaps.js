/*
* Examples of how the map, filter, and reduce Array functions might
* be implemented.
*/

Array.prototype.myMap = function (fun) {
  var newArray = [], i = 0;
  for (i=0; i<this.length; i++) {
    newArray.push(fun(this[i]));
  }
  return newArray;
}

Array.prototype.myFilter = function(isIt) {
  var newArray = [], i = 0;
  for (i=0; i<this.length; i++) {
    if (isIt(this[i]))
      newArray.push(this[i]);
  }
  return newArray;
}

Array.prototype.myReduce = function (fun, init) {
  var result = init, i = 0;
  for (i=0; i<this.length; i++)
    result = fun(result, this[i]);
  return result;
}

