const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
console.log('circle is: ', circle);

// const another = {}; // this method is old, don't use
// for (let key in circle)
//     another[key] = circle[key];

// const another = Object.assign({}, circle); // {} represents empty object, but still older way of cloning

const another = { ...circle }; // ... => spread operator

console.log('another is: ', another);

