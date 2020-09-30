"use strict";
var multiply = function (n1, n2) {
    var result = 0;
    var isPositive = (Math.abs(n1) === n1);
    for (var i = 0; i < n2; i++) {
        result = isPositive ? result + n1 : result - n1;
    }
    return result;
};
console.log(multiply(5, 6));
