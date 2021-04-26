const numbers = [1,2,3];

const joined = numbers.join('|'); // returns a string
console.log(joined);

const parts = joined.split('|') // returns an array
console.log(parts);