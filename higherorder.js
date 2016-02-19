var map = function (arr, fun) {
  var newArr = [];
  for (var i=0; i<arr.length; i++)
    newArr.push(fun(arr[i]));
	console.log(i);
  return newArr;
};

Array.prototype.myMap = function (fun) {
	var newArray = [];
	for (var i=0; i<this.length; i++)
		newArray.push(fun(this[i]));
	return newArray;
}

var addOne = function(n) {return n+1;};
var myList = [1,2,3,4];
var yourList = myList.myMap(addOne);
console.log(yourList);

var maprec = function (arr, fun) {
  return maprecHelper(arr, fun, 0, []);
}

var maprecHelper = function (arr, fun, index, newArr) {
  if (index >= arr.length)
    return newArr;
	newArr.push(fun(arr[index])); 
  return maprecHelper(arr, fun, index+1, newArr);
}

var filter = function (arr, fun) {
  var newArr = [];
  for (var i=0; i<arr.length; i++)
    if (fun(arr[i]))
      newArr.push(arr[i]);
  return newArr;
}

var reduce = function (arr, fun, init) {
  var result = init;
  for (var i=0; i<arr.length; i++)
    result = fun(result, arr[i]);
  return result;
}

var addem = function (n) {
  return function (m) {
    return n + m;
  };
};

var even = function (n) {
  return n % 2 === 0;
};

var add = function (a, b) {
  return a + b;
}

var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(map(testArray, addem(3)));
console.log(maprec(testArray, addem(1))); 
console.log(filter(testArray, even));
console.log(reduce(testArray, add, 0));
