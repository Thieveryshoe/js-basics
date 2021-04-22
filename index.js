// all of these logical operators function as expected
// when working with booleans
//  && (AND)
// || (OR)
// ! (BANG)

//  using non boolean values
console.log(false || true); // true
console.log(false || 'John'); // John
console.log(false || 1); // 1

// js will try to interperet as truthy or falsy if they're not a boolean value 
// falsy
    // undefined
    // null
    // 0
    // false
    // '' (empty string)
    // NaN (not a number)

// truthy
    // everything elese
    // if it's not falsy, it's truthy
    // '    ' => white spaces are not the same as an empty string. => truthy

console.log(false || 1 || 2); // 1 - does not evaluate third conditional => short circuiting

console.log('Begin real world example:');

let userColer = 'red';
let currentColor = getCurrentColor(userColer);
console.log(currentColor); // red
userColer = null;
currentColor = getCurrentColor(userColer);
console.log(currentColor); // blue

function getCurrentColor(userColor) {
    let defualtColor = 'blue';
    return userColer || defualtColor;
}