// fizzBuzz
// if argument is divisible by 3 => fizz
// if argument is divisible by 5 => buzz
// if argument is divisible by 3 && 5 => fizzbuzz
// if argument is not divisible by 3 || 5 => argument
// if argument is not a number => 'not a number'

console.log(fizzBuzz(3)); // fizz
console.log(fizzBuzz(5)); // buzz
console.log(fizzBuzz(15)); // fizzbuzz
console.log(fizzBuzz(7)); // 7 
console.log(fizzBuzz('sadf')); // not a number

function fizzBuzz(num) {
    if (typeof(num) !== 'number') {
        return NaN;
    }

    let divByThree = false;
    let divByFive = false;

    if (num % 3 === 0) {
        divByThree = true;
    }

    if (num % 5 === 0) {
        divByFive = true;
    }

    if (divByThree && !divByFive) {
        return 'fizz';
    }
    if (!divByThree && divByFive) {
        return 'buzz';
    }
    if (divByThree && divByFive) {
        return 'fizzbuzz'
    }
    return num;
}