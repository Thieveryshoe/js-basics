const numbers = [1, -2, 2, 3];
const positiveNumbers = numbers.filter(x => x >= 0);
console.log(positiveNumbers);

const stores = [
    { Id: 1, isOpen: true},
    { Id: 1, isOpen: false}
];
console.log('all stores', stores);
const openStores = stores.filter(x => x.isOpen === true);
console.log('open stores', openStores);

