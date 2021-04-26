// finding primitives
const numbers = [1, 2, 3, 4];
// find 2
console.log(numbers.indexOf(2)); // 1
// find 6
console.log(numbers.indexOf(6)); // -1 => does not exist
// find last index of 1
numbers.push(1);
console.log(numbers.lastIndexOf(1)); // 4
// does number include argument?
console.log(numbers.includes(4)); // true