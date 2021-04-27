const person = {
    firstName: 'John',
    lastName: 'Ellison',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(fullName) {
        // if (typeof fullName !== 'string') return; // this is one way to be defensive
        if (typeof fullName !== 'string')
            throw new Error('Value is not a string.');
        const parts = fullName.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter only first and last name.')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    // person.fullName = null;
    person.fullName = 'John sdf dfljd';
} catch (e) {
    alert(e);
}
// console.log(person); // fullName is null error
