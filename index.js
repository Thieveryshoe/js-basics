const numbers = [1,2,3];

for (let n of numbers)
    console.log(n);

// awww sweet syntax sugar
numbers.forEach(n => console.log(n));

numbers.forEach((n, index) => console.log(n, index));