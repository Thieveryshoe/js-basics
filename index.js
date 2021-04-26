const address = {
    street: 'Odell',
    city: 'St. Louis',
    zipCode: '63139'
};


function showAddress(address) {
    for (let key in address) {
        console.log(`${key} is ${address[key]}`);
    }
}

showAddress(address);