const numbers = [1, -2, 2, 3];
const items = numbers
    .filter(x => x >= 0)
    .map(n => '<li>' + n + '</li>');
console.log(items);

const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

const objMap = numbers.map(n => ({ id: n, idPlus: n + 1 }));
console.log(objMap);