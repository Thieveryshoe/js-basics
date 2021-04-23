// for loop, works as expected
console.log('Begin for loop');
for (let i = 0; i < 3; i++) {
    console.log('Hello world.', i);
}

// while loop, works as expected
console.log('Begin while loop');
let i = 4;
while (i < 3) {
    console.log('Hello world.', i);
    i++;
}

// do-while loop, works as expected, always executed at least once.
console.log('Begin do-while loop');
i = 0;
do {
    console.log('Hello world.', i);
    i++;
} while (i < 3);

