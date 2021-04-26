const numbers = [1, -1, 2, 3];

let sum = 0;

numbers.forEach(n => sum += n);
console.log(sum);


let reduced = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(reduced);