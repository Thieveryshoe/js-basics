let numbers = createArray();
console.log('orignal numbers: ', numbers);

// solution 1
numbers = [];
console.log(numbers);

// solution 2 => this is probably the one that will be safest
numbers = createArray();
console.log('orignal numbers: ', numbers);
numbers.length = 0;
console.log(numbers);

//solution 3
numbers = createArray();
console.log('orignal numbers: ', numbers);
numbers.splice(0, numbers.length);
console.log(numbers);

// solution 4 => this is dumb but works
numbers = createArray();
console.log('orignal numbers: ', numbers);
while (numbers.length > 0) {
    numbers.pop();
}
console.log(numbers);

function createArray() {
    return [1,2,3,4,5];
}
