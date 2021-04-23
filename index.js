// for-in loops
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