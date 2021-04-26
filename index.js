// Factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
console.log(createAddress('1', '2', '3'));

// Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city,
    this.zipCode = zipCode;
}

console.log(new Address('a', 'b', 'c'));