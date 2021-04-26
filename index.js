// when we apply the rest operator to a parameter of a function
// we can pass varying number of arguments and put them into an array
// rest parameter must be the last formal parameter.
// funciton sum(discount, ...args, soemthingElse) => won't work
function sum(...args) {
    return args.reduce((a, b) => a + b);
}
console.log('sum:');
console.log(sum(1,2,3,4,5,6));

function getTotal(discount, ...prices) {
    let total = 0;
    prices.forEach(p => total += p);
    return total * (1 - discount);
}
console.log('getTotal');
console.log(getTotal(.1, 100, 50));