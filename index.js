// dynamic nature of objects in js
// const here means we cannot reassign the variable, not the properties of the variable
const circle = {
    radius: 1
}

console.log(circle);

circle.color = 'yellow'

console.log(circle);

delete circle.color;

console.log(circle);