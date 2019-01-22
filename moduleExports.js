// Module.export

let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;
 

 EG2


const Airplane = {};
Airplane.myAirplane = "StarJet";

module.exports = Airplane;

-----------------------------------

REQUIRE()

// To make use of the exported module and the behavior we define within it, we import the module. 
// A common way to do this is with the require() function.

const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();

// We now have the entire behavior of Menu available in order.js. Here, we notice:

// In order.js we import the module by creating a variable with const called Menu and setting it equal to the value of the require() function. We can set this variable to any variable name we like, such as menuItems.
// require() is a JavaScript function that enables a module to load by passing in the module's filepath as a parameter.
// './menu.js' is the argument we pass to the require() function.
// The placeOrder() function then uses the Menu module in its function definition. By calling Menu.specialty, we access the property specialty defined in the Menu module.
// We can then invoke the function using placeOrder()
// Taking a closer look, the pattern to import a module is:

TO BREAK IT DOWN

//  1. Import the module
//  2. Use the module and its properties within a program.


EG:

const Airplane = {};
Airplane.myAirplane = "StarJet";

module.exports = Airplane;

//SAVED TO ONE filepath ./1-airplane.js

const Airplane  = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
  
}

displayAirplane();


-------------------------------------------------

YOU CAN USE FUNCTIONS TOO....

//  in main.js 

let Menu = {};

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
};

// in order.js

const Menu = require('./menu.js');

console.log(Menu.getSpecialty()); 
//  THE CONSOLE LOG ACCESSES THE MAIN.JS FILE AND PULLS THE SPECIALITY FUNCTION.

EG2

// in Airplane.js

const Airplane = {
 
  
};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function(){
    return this.myAirplane;
  }
};
// in  missonControl.js

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());
// this log accesses the Airplane.js for the function which returns, this.myAirplane, which has a value of "CloudJet", so logs CloudJet to the console.

---------------------------------------------------------------

EXPORT DEFAULT

// The default export syntax works similarly to the module.exports syntax, allowing us to export one module per file.

let Menu = {};

export default Menu;
// When using ES6 syntax, we use export default in place of module.exports.

EG:

// in airplane.js

const Airplane = {

};

Airplane.availableAirplanes = [
  {
  name: 'AeroJet',
  fuelCapacity: 800
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500
 }
  
  ];

export default Airplane;

// We added a property that lists the availableAirplanes to the Airplane module.


in mission missonControl.js

import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();


// output 

Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500

-----------------------------------------

NAMED EXPORTS:


// ES6 introduced a second common approach to export modules.
// In addition to default export, named exports allow us to export data through the use of variables.

EG:

let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };

-----
 
ABOVE - Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.

specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. Recall that in JavaScript, 
every function is in fact a function object.

export { specialty, isVegetarian }; exports objects by their variable names. Notice the keyword export is the prefix.

specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified.

----

import { specialty, isVegetarian } from './menu';

console.log(specialty);

-----------------------------------


EG2:

let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ["pilots", "flightAttendants", "engineers", "medicalAssitance", "SensorOperators"],
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ["pilots", "flightAttendants"],
 }
];

let flightRequirements = {
  requiredStaff: 4,
  
};

let meetsStaffRequirements = (availableStaff, requiredStaff) =>{
  if (availableStaff.length >= requiredStaff){
    return true;
  } 
  else {
      return false;
    }
  };

export { availableAirplanes, flightRequirements, meetsStaffRequirements };


// new js

import { availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

// OUTPUT

Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500
 

function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
    
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
  });
}
displayStaffStatus();

AeroJet meets staff requirements: true
SkyJet meets staff requirements: false

----------------------------------------------------------------------------------


// Named exports are also distinct in that they can be exported as soon as they are declared, 
// by placing the keyword export in front of variable declarations.

EG:

// IN menu.js


export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
};

TO IMPORT
// in another .js

import { specialty, isVegetarian } from 'menu';

----

EG2:

// IN airplane.js

export let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  maxSpeed:	1200,
  minSpeed: 300,
  availableStaff: ["pilots", "flightAttendants", "engineers", "medicalAssitance", "SensorOperators"],
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  maxSpeed: 800,
  minSpeed: 200,
  availableStaff: ["pilots", "flightAttendants"],
 }
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
  
};

export let meetsStaffRequirements = (availableStaff, requiredStaff) =>{
  if (availableStaff.length >= requiredStaff){
    return true;
  } 
  else {
      return false;
    }
  };


export let meetsSpeedRangeRequirements = (maxSpeed,minSpeed,requiredSpeedRange) => {
const range =  maxSpeed - minSpeed;
  if(range > requiredSpeedRange){
    return true;
  }
  else{
    return false;
  }
};


// IN missionControl.js

import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';


function displaySpeedRangeStatus() { 
  availableAirplanes.forEach(function(element){
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed,flightRequirements.requiredSpeedRange)  );
  });
  
}

displaySpeedRangeStatus();

// output:

AeroJetmeets speed range requirements: true
SkyJetmeets speed range requirements: false

--------------------------------------------------


Export as
// Named exports also conveniently offer a way to change the name of variables when we export or import them. 
// We can do this with the as keyword

let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

// To import named export aliases with the as keyword, we add the aliased variable in our import statement.

import { chefsSpecial, isVeg } from './menu';

---------------------------------------

Combining Export Statements

// We can also use named exports and default exports together. In menu.js:

let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;

OR:

export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
}; 
export let isLowSodium = function() {
}; 
let isGlutenFree = function() {
};

export default isGlutenFree;


// While it's better to avoid combining two methods of exporting, it is useful on occasion. For example, 
// if you suspect developers may only be interested in importing a specific function and won't need to import the entire default export.

