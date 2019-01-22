// Funtions

// Pre ES6:

var greeting = function() {
  console.log('Hello World!');  
};

//Post ES6:

const greeting = () => console.log('Hello World');

-----------------------------------------------------

// DEFAULT PAREMETERS

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

// eg:2

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

------------------------------------------------------

// STORING A VALUE OF A FUNCTION INTO A VARIABLE

function monitorCount(rows, columns){
  
  return rows*columns;
 
}

const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);

-----------------------------------------------------

//HELPER FUNCTIONS:

function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59


// In the example above:

// getFahrenheit() is called and 15 is passed as an argument.

// The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.

// multiplyByNineFifths() takes the argument of 15 for the number parameter.

// The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
// 27 is returned back to the function call in getFahrenheit().

// getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.

// Finally, 59 is returned back to the function call getFahrenheit(15).
-----------------------------------------------------

// FUNCTION EXPRESSION

const plantNeedsWater = function(day){
  
  if (day === "Wednesday"){
    return true;
   }
  else{
  	return false;
    }
  
}

console.log(plantNeedsWater("Tuesday"));

----------------------------------------------

// ES6 FAT ARROW FUNTIONS

const rectangleArea = (width, height) => {
  let area = width * height;
  return area
}


// ZERO PARAMETERS

const functionName = () => {};

// ONE PARAMETER

const functionName = paramOne => {};

// TWO PARAMETERS OR MORE

const functionName = (paramOne, paramTwo) => {};


// ALSO, SINGLE LINE BLOCK DOES NOT NEED {}

const squareNum = (num) => {
  return num * num;
};

// BECOMES:

const squareNum = num => num * num;

----------------------------------------------