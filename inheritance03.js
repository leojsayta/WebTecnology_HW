/* Prototypal style inheritance. */

var myMammal = {
  name: 'Herb the Mammal',
  getName: function () {
    return this.name;
  },
  says: function () {
    return this.saying || '';
  }
};

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta'; 
myCat.saying = 'meow';
myCat.purr = function (n) {
    var i, s = '';
    for (i=0; i<n; i++) {
      if (s) s += '-';
      s += 'r';
    }
    return s;
};

console.log(myCat.getName());
myCat.getName = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};

console.log(myCat.purr(9));
console.log(myCat.getName());
console.log(myCat.says());
console.log(Object.getPrototypeOf(myCat));

console.log(Object.getPrototypeOf(myCat).getName());