// for-in loops
// use for in to iterate over propeties of an object
let person = {
    name: 'John',
    age: 36
};

for (let prop in person) {
    // console.log(prop);  //print the property label
    console.log(prop, person[prop]); // print the property value, have to use bracket notation
}

console.log('begin colors');

const colors = ['red', 'green', 'blue'];
for (let index in colors) {
    console.log(index); // prints current value of index in the array
    console.log(colors[index]); // prints current value of the index
}

// for-of lop => for-each
console.log('begin for-of');
const shapes = ['triangle', 'square', 'circle'];
for (let c of shapes) {
    console.log(c);
}

// 
console.log('begin extension method');
shapes.forEach(x => console.log(x));
// use for of to iterate over items in an array
