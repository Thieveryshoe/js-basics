// finding reference types
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

console.log(courses.includes({ id: 1, name: 'a'})); // False

let found = courses.find(function(course) {
    return course.name === 'a';
});

console.log(found); // logs the object

let found2 = courses.findIndex(function(course) {
    return course.name === 'a';
});

console.log(found2); // 0