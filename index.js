let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

console.log(propertiesAreEqual(address1, address2)); //true
console.log(isSameObject(address1, address2)); // false
console.log(isSameObject(address1, address3)); // true

// Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city,
    this.zipCode = zipCode;
}

function propertiesAreEqual(a, b) {
    return a.street === b.street
        && a.city === b.city
        && a.zipCode === b.zipCode
}

function isSameObject(a, b) {
    return a === b; // checks the memory reference
}