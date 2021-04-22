let x = 1;

// relational operators
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// equality operators
console.log(x === 1);
console.log(x !== 1);

console.log('Begin strict v loose:');
// strict equality
// value and type are the same
console.log(1 === 1); // true
console.log('1' === 1); // false
// loose equality
// value only is the same
console.log(1 == 1); // true
console.log('1' == 1); //true
// transform looks like: '1' == 1 =>  '1' == '1'
console.log('Begin comparing booleans:');
console.log(true == 1); // true
console.log(true == 0); // false
console.log(true === 1); // false

// most of the time, just use strict until given a reason not to.
// and try not to give yourself a reason either.
// and just set your linter to always convert to strict.