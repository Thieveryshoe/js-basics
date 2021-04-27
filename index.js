// using let, variable is limited to the code block it's defined in => scope is the loop in this case
function startLet() {
    console.log('logging using let:');
    for (let i = 0; i < 5; i++)
        console.log(i);
    // console.log(i); // uncaught reference: i is not defined error when trying to use htis line
}

// using let, variable is limited to the function it's defined in => scope is the function in this case
function startVar() {
    console.log('logging using var:');
    for (var i = 0; i < 5; i++)
        console.log(i);   
    console.log(i);
    console.log(i);
}

// var => function-scoped variabls, was the only way to define variables for awhile
// ES6 (ES2015): let, const added => create block-scoped variables

startLet();
startVar();