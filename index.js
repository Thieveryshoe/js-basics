const numbers = [1,2,3];

const allPositive = numbers.every(x => x >= 0);
console.log(allPositive);

const numbers2 = [1,-2,3];

const allPositive2 = numbers2.every(x => x >= 0);
console.log(allPositive2);

const numbers3 = [1, -2, 2, 3];
const atLeastOneNegative = numbers3.some(x => x < 0);
console.log(atLeastOneNegative);