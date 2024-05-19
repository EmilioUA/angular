"use strict";
//OPTIONAL
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(2, 3, 5));
//REQUIRED
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3; //Arrow function
console.log(sub(2, 3));
console.log(sub(2, 3, 5));
const mult = function add(num1, num2) {
    return num1 * num2;
};
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add2(2, 3));
console.log(add2(2, 3, 1, 2, 3, 4, 5));
console.log(add2(2, 3, ...[1, 2, 3, 4, 5]));
