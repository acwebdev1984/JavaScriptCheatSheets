// IF STATEMENTS:

let sale = true;

if (sale === true){
  
  console.log("Time to buy!");
};

// ifelse

let sale = false;

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
// Prints "But the code in this block will!"
-----------------------------------------------
// Comparison Operators

10 < 12 // Evaluates to true
'apples' === 'oranges' // false

------------------------------------------------

logical Operators

the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
--------------------------------------------------

Truthy and Falsy Assignment


let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';

  // CAN BE SHORTENED TO 

  let defaultName = username || 'Stranger';
--------------------------------------------------

  Ternary Operator


let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// CAN BE SHORTENED TO :

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');


-------------------------------------

// Else if 

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

----------------------------------------

// Switch a cleaner alternative to else if:


let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'

--------------------------------------------------







