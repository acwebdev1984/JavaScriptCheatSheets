// ADVANCED OBJECTS

The this Keyword;
----------------
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"
//why is dietType not defined even though it's a property of goat? That's because inside the scope of the .diet() method, 
//We don't automatically have access to other properties of the goat object.

SO:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore

--------------------------------------

EG2:

const robot = {
  model :	'1E78V2',
  energyLevel : 100,
  provideInfo(){
    
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  } 
  };
 

console.log(robot.provideInfo());

----------------------------------------

Arrow Functions and this


//AVOID using arrow functions when using this in a method!

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined

// Arrow functions inherently bind, or tie, an already defined "this" value to the function itself that is NOT the calling object.
// In the code snippet above, the value of "this" is the global object, or an object that exists in the global scope, 
// which doesn't have a dietType property and therefore returns undefined.


CORRECT SYNTAX

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

-------------------------------------------------------

PRIVACY

// JavaScript developers follow naming conventions that signal to other developers how to interact with a property. 
// One common convention is to place an underscore _ before the name of a property
// to mean that the property should not be altered. Here's an example of using _ to prepend a property.

EG:

const bankAccount = {
  _amount: 1000
}

IT IS STILL POSSIBLE TO RE-ASSIGN HOWEVER, EG:

bankAccount._amount = 1000000;

-------------------------------------------------


GETTERS

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'


advantages of using a getter method:

1.	Getters can perform an action on the data when getting a property.
2.	Getters can return different values using conditionals.
3.	In a getter, we can access the properties of the calling object using this.
4.	The functionality of our code is easier for other developers to understand.




EG2:

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

------------------------------------------------------------


SETTERS:

Setters
//Along with getter methods, we can also create setter methods which reassign values
//of existing properties within an object. Let's see an example of a setter method:


const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

// Notice that in the example above:

// We can perform a check for what value is being assigned to this._age.
// When we use the setter method, only values that are numbers will reassign this._age
// There are different outputs depending on what values are used to reassign this._age.

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

-------------------------------------------------

EG2:


const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }   
  } 
};

robot.numOfSensors = -1;
console.log(robot.numOfSensors);

// Output

"Pass in a number that is greater than or equal to 0"
15

------------------------------------------------------------

FACTORY FUNCTIONS;

//A factory function is a function that returns an object and can be reused to make multiple object instances. 
//Factory functions can also have parameters allowing us to customize the object that gets returned.

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

WE CAN NOW USE THE FACTORY FUNCTION AND JUST CHANGE THE PARAMETERS;

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


and 

const zombie = monsterFactory (`Shaun`, 25, `human blood`, `waaaah`);
zombie.scare(); // waaaaah

EG:2

const robotFactory = (model,mobile) => {
  return{
  model: model,
  mobile: mobile,
  beep(){ console.log(`im a little robot monkey!`);}
  }
  
  }

const tinCan = robotFactory(`P-500`, true);

tinCan.beep();

------------------------------------------------------------------------


PROPERTY VALUE SHORTHAND

// ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.


THIS

const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

CAN BE WRITTEN AS:

const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }

  ---------------------------------------------

Destructured Assignment

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

// THIS CREATES A NEW VARIABLE, CALLED FUNCTIONALITY WHILST ACCESSING, THE KEY FUNCTIONALITY FROM THE OBJECT.

const {functionality} = robot;

console.log(functionality); 
// OUTPUT - 
{ beep: [Function: beep], fireLaser: [Function: fireLaser] }


// Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.
functionality.beep();


-----------------------------------------------

BUILT IN OBJECT methods

.hasOwnProperty(), 
.valueOf()
Object.assign(),
Object.entries(), 
Object.keys(),


const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

RETURNS AN ARRAY 

[ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

const robotEntries = Object.entries(robot)
console.log(robotEntries);

RETURNS ARRAYS WITHIN ARRAYS

[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]


const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

ADDS TO EXISTING OBJECT

{ laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 }






























