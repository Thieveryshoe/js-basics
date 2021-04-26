const numbers = [1,2,3,4,5]

console.log(numbers);
// remove from end
let last = numbers.pop();
console.log(last);
console.log(numbers);
// remove from beginning
let first = numbers.shift()
console.log(first);
console.log(numbers);
// remove from middle
let middle = numbers.splice(1, 1);
console.log(middle);
console.log(numbers);