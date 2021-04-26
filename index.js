const numbers = [3, 4];
console.log(numbers);
// add to end
numbers.push(5, 6);
console.log(numbers);
// add to beginning
numbers.unshift(1, 2);
console.log(numbers);
// add to middle
numbers.splice(2, 0, 2.5);
console.log(numbers);