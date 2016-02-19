//2. Problem0002: The sum of the squares of the first ten natural numbers is,
//  12 + 22 + ... + 102 = 385 The square of the sum of the first ten natural numbers is,
//  (1 + 2 + ... + 10)2 = 552 = 3025 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 ? 385 = 2640.
//  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sumDiff = function (endCond) {

    var i, sqrAndsum = 0, sum = 0, sumAndsqr = 0;

    for (i = 1; i <= endCond; i++) {
        sqrAndsum += (i * i);
        sum += i;
    }

    sumAndsqr = sum * sum;

    return (sumAndsqr - sqrAndsum);
};

(function () {
    "use strict";

    var p = sumDiff(100);
    console.log("The difference between the sum of the squares and the square of the sum of the first one hundred natural numbers is:  " + p);

}());