

//1. Problem0001: Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 
//  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... 
//  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. 

var isEven = function (num) {
    return (num % 2 === 0) ? true : false;
};

var isOdd = function (num) {
    return !(isEven(num));
};

var sumDigits = function (filterFcn, endCond) {
    var sum = 0;
    var xn, xn1 = 1, xn2 = 0;

    loopy:while (true) {

        xn = xn1 + xn2;

        if (xn > endCond)
            break loopy;

        if (filterFcn(xn))
            sum += xn;

        xn2 = xn1;
        xn1 = xn;
    }

    return sum;
};

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

//3. Problem0003: Compute the total number of odd and even digits in the first 100 multiples of 3 (starting with 0). 
//   For example, the first 6 multiples of 3 are 0, 3, 6, and 9, 12, 15. 
//   There are a total of 5 odd digits and 3 even digits. (0 is an even digit).

var ansObj = function (oddSum, evenSum) {
    this.oddSum = oddSum;
    this.evenSum = evenSum;
};

var sumOddsAndEvens = function (endCond) {

    var i, j, mult3 = 0, oddSum = 0, evenSum = 0;
    var m3Arr;

    for (i = 0; i < endCond; i++) {
        mult3 = i * 3;

        m3Arr = mult3.toString().split("");
        for (j = 0; j < m3Arr.length; j++) {
            if (isEven(parseInt(m3Arr[j])))
                evenSum++;
            else
                oddSum++;
        }

    }

    return new ansObj(oddSum, evenSum);
};

(function () {
    "use strict";

    var s = sumDigits(isEven, 4000000);
    console.log("The sum of the even-valued Fib terms under 4000000 is:  " + s);

    var p = sumDiff(100);
    console.log("The difference between the sum of the squares and the square of the sum of the first one hundred natural numbers is:  " + p);

    var ans = sumOddsAndEvens(100);
    console.log("The total number of odd digits in the first 100 multiples of 3 (starting with 0) is:  " + ans.oddSum);
    console.log("The total number of even digits in the first 100 multiples of 3 (starting with 0) is:  " + ans.evenSum);

}());


