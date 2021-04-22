// If a customer has more than 100 points,
// they are a gold customer.  otherwise,
// they are a silver customer.

let points = 110;

console.log(getType(points)); // gold
console.log('points value reduced below gold threshold');
points = 50;
console.log(getType(points)); // silver

function getType(points) {
    return points > 100 ? 'gold' : 'silver';
}