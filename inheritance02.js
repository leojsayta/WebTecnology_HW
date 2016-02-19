/* Some utility functions to make code clearer. */

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

Function.method('inherits', function (Parent) {
  this.prototype = new Parent();
  return this;
});

/* End of utility functions. */

var Mammal = function (name) {
  this.name = name;
};

Mammal.method('getName', function () {
  return this.name;
});

Mammal.method('says', function () {
  return this.saying || '';
});

var Cat = function (name) {
  this.name = name;
  this.saying = 'meow';
}.
  inherits(Mammal).
  method('purr', function (n) {
    var i, s = '';
    for (i=0; i<n; i++) {
      if (s) s += '-';
      s += 'r';
    }
    return s;
  }).
  method('getName', function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
  });

var Dog = function (name) {
  this.name = name;
  this.saying = 'bowwow';
}.
  inherits(Mammal);
  
var Groundhog = function (name) {
  this.name = name;
}.
  inherits(Mammal).
  method('says', function (day) {
    if (day === 'sunny')
      return 'Six more weeks of winter!';
    else
      return 'Two more weeks of winter.';
  });

var hog1 = new Groundhog('phil');
console.log(hog1.getName());
console.log(hog1.says('sunny'));

for (var prop in hog1) {
	if (Object.hasOwnProperty(prop)) {
		   console.log('My own property: ' + prop + '  Value: ' 
									 + hog1[prop]);
  }
  else {
    console.log('Not own property: ' + prop);
	}
}

var cat1 = new Cat('eve');
console.log(cat1.getName());
console.log(cat1.purr(6));

var cat2 = new Cat('squiggles');
console.log(cat2.getName());
console.log(cat1.getName());

var dog1 = new Dog('fido');
console.log(dog1.getName());
