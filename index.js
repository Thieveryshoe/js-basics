// OOP style.  Basics are as expected.

// Factory function
function createCircle(radius) {
    return {
        radius, // if key and value are the same, can remove the value. radius: radius => radius
        draw() { // can drop the function keyword in the signature
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(13);
console.log(circle2);