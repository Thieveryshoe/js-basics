// default  paramets
// function interest(principal, rate, years) {
//     return principal * rate / 100 * years;
// }
// what if we want default values for interest rate and years

function interest(principal, rate, years) {
    rate = rate || 3.5; // if rate is truthy, use that, else 3.5
    years = years || 5;   // if years is truthy, use that, else 30
    return principal * rate / 100 * years;
}

console.log('given all params', interest(10000, 3.5, 5));
console.log('given only amount', interest(10000));

// can write in even more modern way
function calculateInterest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log('calculateInterest with all pararms', calculateInterest(10000, 3.5, 5));
console.log('calculateInterest with only amount param', calculateInterest(10000));