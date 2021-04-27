// const person = {
//     firstName: 'John',
//     lastName: 'Ellison',
//     fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     }
// };

// console.log('called using string literal:',`${person.firstName} ${person.lastName}`); // kind of a long winded to do 
// console.log('called with fullName method:', person.fullName()); // read only, cannot set the full name form the outside

// getters => access properties
// setters => change (mutate) properties

const person = {
    firstName: 'John',
    lastName: 'Ellison',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(fullName) {
        const parts = fullName.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log('called with fullName method:', person.fullName); // can access like a property now => no ()

// but what if we want to do something like
person.fullName = 'Big Pun'; // have to create the setter
console.log('name has been mutated with a setter:', person.fullName); // Big Pun
console.log(person);