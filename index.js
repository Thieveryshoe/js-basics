// no need to list the type of the parameter in the signature of the function
function great(firstName, lastName) {
    console.log('hello ' + firstName + ' ' + lastName);
    console.log(`hello ${firstName} ${lastName}`); //template string - string literals work
}

// great('John', 'Ellison');
// great('Leslie', 'Ward');


function square(number) {
    return number * number;
}
// let number = square(2);
console.log(square(2));