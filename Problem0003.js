//3. Problem0003: Compute the total number of odd and even digits in the first 100 multiples of 3 (starting with 0). 
//   For example, the first 6 multiples of 3 are 0, 3, 6, and 9, 12, 15. 
//   There are a total of 5 odd digits and 3 even digits. (0 is an even digit).

var isEven = function (num) {
    return (num % 2 === 0) ? true : false;
};

var isOdd = function (num) {
    return !(isEven(num));
};

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

    var ans = sumOddsAndEvens(100);
    console.log("The total number of odd digits in the first 100 multiples of 3 (starting with 0) is:  " + ans.oddSum);
    console.log("The total number of even digits in the first 100 multiples of 3 (starting with 0) is:  " + ans.evenSum);

}());