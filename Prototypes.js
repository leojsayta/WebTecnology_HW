var Cat = function (catparams) {
  this.name = catparams.name;
  this.age = catparams.age;
  this.weight = catparams.weight;
  this.breed = catparams.breed;
}

Cat.prototype.run = function () {
  return 'fast';
}

Cat.prototype.sleeping = false;
Cat.prototype.sleep = function () {
  if (this.sleeping)
    return this.name + " is already sleeping";
  else {
    this.sleeping = true;
    return this.name + " is now sleeping";
  }
};

var cat1 = new Cat({'name' : 'fred',
									  'age' : 3,
									  'weight' : 7,
									  'breed' : 'domestic shorthair'});

console.log(cat1.sleep());
console.log(cat1.sleep());

Cat.prototype.wake = function(hungry) {
  if (hungry === 'hungry') {
    this.sleeping = false;
    return 'feed me';
  }
};

console.log(cat1.wake('hungry'));
console.log(cat1.sleep());
console.log(Object.getPrototypeOf(cat1));

var cat2 = new Cat({'name' : 'fluffy',
										'age' : 6,
										'weight' : 19,
										'breed' : 'Maine coon'});
console.log(Object.getPrototypeOf(cat2));
console.log(cat2.wake('hungry'));
console.log(cat1.sleep());
console.log(cat2.sleep());

console.log(Cat.prototype);
console.log(cat1.sleeping);
console.log(cat2.sleeping);
console.log(cat1.hasOwnProperty('sleeping'));
console.log(cat1.hasOwnProperty('run'));