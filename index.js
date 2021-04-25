// every object has a constrcutor property which references
// the function that was used to create that object

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw factory function');
        }
    };
}
const circle1 = createCircle(1);

// from the firefox console:
/*
circle1.constructor
function Object()
​
assign: function assign()
​
create: function create()
​
defineProperties: function defineProperties()
​
defineProperty: function defineProperty()
​
entries: function entries()
​
freeze: function freeze()
​
fromEntries: function fromEntries()
​
getOwnPropertyDescriptor: function getOwnPropertyDescriptor()
​
getOwnPropertyDescriptors: function getOwnPropertyDescriptors()
​
getOwnPropertyNames: function getOwnPropertyNames()
​
getOwnPropertySymbols: function getOwnPropertySymbols()
​
getPrototypeOf: function getPrototypeOf()
​
is: function is()
​
isExtensible: function isExtensible()
​
isFrozen: function isFrozen()
​
isSealed: function isSealed()
​
keys: function keys()
​
length: 1
​
name: "Object"
​
preventExtensions: function preventExtensions()
​
prototype: Object { … }
​
seal: function seal()
​
setPrototypeOf: function setPrototypeOf()
​
values: function values()
​
<prototype>: function ()
*/

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw using constructor function');
    }
}
const circle2 = new Circle(34);

// from the firefox console:
/*
circle2.constructor
function Circle(radius)
​
arguments: null
​
caller: null
​
length: 1
​
name: "Circle"
​
prototype: Object { … }
​
<prototype>: function ()
*/