// exercise 2:
// implement isLandscape(width, height)
// returns true if width > height, else false

let width = 10;
let height = 5;

console.log(isLandscape(width, height)); // true

height = 24;
console.log(isLandscape(width, height)); // false

function isLandscape(width, height) {
    return width > height;
}