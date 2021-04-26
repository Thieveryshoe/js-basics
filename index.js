const first = [1,2,3];
const second = [4,5,6];

const combined = [...first, ...second];
console.log('combined', combined);
const combined2 = first.concat(second)
console.log('combined2', combined2);

const combined3 = [...first, ...second, 'b'];
console.log('combined3', combined3);

const copy = combined3.slice();
console.log('copy1', copy);

const copy2 = [...combined3];
console.log('copy2', copy2);