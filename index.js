let a = 'red';
let b = 'blue';
let cache = a;
a = b;
b = cache;

console.log(a); // red => blue
console.log(b); // blue => red

// write code to swap the color values