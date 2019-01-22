// STANDARD STRING VARIABLE PRE- ES6

var favoriteFood = "pizza";

// CONSOLE LOGGING VARIABLES:

console.log(favoriteFood);
console.log(numOfSlices);

/* the let keyword was introduced in ES6. 
The let keyword signals that the variable
can be reassigned a different value.
*/

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

//* However, a const variable cannot be reassigned because it is constant. If you 
//try to reassign a const variable, you'll get a TypeError.


const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

// VARIABLE MATH

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

// how to connect, or concatenate

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

//ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. 

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

//The typeofoperator checks the value to its right and returns, or passes back, a string of the data type.

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

//

