var Cat = function (catparams) {
    this.name = catparams.name;
    this.age = catparams.age;
    this.weight = catparams.weight;
    this.breed = catparams.breed;
    
    this.run = function () {
      console.log(catparams.speed);
    }
}

var cat1 = Cat({name: 'bob', age: 3, weight: 8.9, breed: 'fuzz', speed: 'slow'});

cat1.run();
console.log(typeof cat1);
console.log(cat1 instanceof Cat);
cat1.hairiness = 'lots';
console.log(cat1);


