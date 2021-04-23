let hour = 10;
console.log(getGreeting(hour)); // Good morning
hour = 15;
console.log(getGreeting(hour)); // Good afternoon
hour = 22;
console.log(getGreeting(hour)); // Good evening

function getGreeting(hour) {
    if (hour > 6 && hour < 12) {
        return 'Good morning';
    }
    // else if (hour > 12 && hour < 18) {
    //     return 'Good afternoon';
    // }
    // brackets for multi line code blocs
    else if (hour > 12 && hour < 18)
        return 'Good afternoon';
    else
        return 'Good evening'
}