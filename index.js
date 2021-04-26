const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) {
    console.log(key, circle[key]);
};

for (let key of Object.keys(circle)) {
    console.log(key);
};

for (let entry of Object.entries(circle)) {
    console.log(entry);
}

if ('radius' in circle) console.log('radius is in');
if (Object.keys(circle).includes('radius')) console.log('radius is included');
if (!Object.keys(circle).includes('color')) console.log('color is not included');