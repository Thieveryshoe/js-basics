// function declaration
function walk() {
    console.log('walk');
}

// anonymous function expression
const run = function() {
    console.log('run');
};

// named function expression
const jog = function jog() {
    console.log('jog');
};

let move = run;

walk(); // walk
run(); // run
jog(); // jog
move(); // run