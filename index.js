// js is a dynamic languate

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // NaN
console.log(sum()); // NaN
console.log(sum('foo', 'Fighters')); //fooFighters
console.log(sum(1, 'Two')); //1Two
console.log(sum(1, 2, 3, 4)); // 3

// every function has a special property called arguments
function times() {
    total = 1;
    Array.from(arguments).forEach(a => total *= a);
    return total;
}
console.log('begin times:');
console.log(times(2)); // 2
console.log(times(1, 2, 3)); // 6
console.log(times(10, 44, 9, 0)); // 0