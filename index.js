// exercise 1:
// write function that has two numbers and returns the argument with greater value

let num1 = 1;
let num2 = 2;
console.log(getMaxValue(num1, num2)); // 2

num1 = 5;
console.log(getMaxValue(num1, num2)); // 5

function getMaxValue(num1, num2) {
    return num1 > num2 ? num1 : num2;
}