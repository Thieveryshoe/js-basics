// + - * / % are the same as expected
// ** is special to the power of operator
//  x ** y => x to the power of y

let number = 10;
console.log(number);  // 10
console.log(number++); // 10
console.log(number); // 11
console.log(++number); //12
console.log(number); // 12


console.log('start decrements');
console.log(--number); // 11
console.log(--number); // 10
console.log(number--); // 10
console.log(number); // 9