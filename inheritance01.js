/* A more or less classical style of inheritance. */

var Mammal = function (name) {
  this.name = name;
};

Mammal.prototype.getName = function () {
  return this.name;
};

Mammal.prototype.says = function () {
  return this.saying || '';
};

var Cat = function (name) {
  this.name = name;
  this.saying = 'meow';
};

Cat.prototype = new Mammal();

var Dog = function (name) {
  this.name = name;
  this.saying = 'bowwow';
};

Dog.prototype = new Mammal();

Mammal.prototype.runs = function () {
  return this.speed || '';
};

Dog.prototype.speed = 'slow';

var dog1 = new Dog('fido');
console.log(dog1.getName());
console.log(dog1.says());
console.log(dog1.runs());

for (var prop in dog1) {
	if (Object.hasOwnProperty(prop)) {
		   console.log('My own property: ' + prop + 'Value: ' 
									 + dog1[prop]);
  }
  else {
    console.log('Not own property: ' + prop);
	}
}

console.log(Object.getPrototypeOf(dog1));
