// finding reference types
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

console.log(courses.includes({ id: 1, name: 'a'})); // False

let found = courses.find(c => c.name === 'a');

console.log(found); // logs the object

let found2 = courses.findIndex(c => c.name === 'a');

console.log(found2); // 0