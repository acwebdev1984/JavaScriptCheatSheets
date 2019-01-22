OBJECTS ---

let spaceship = {}; // spaceship is an empty object

//We fill an object with unordered data. This data is organized into key-value pairs.
 // A key is like a variable name that points to a location in memory that holds a value.

 // An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
   color: 'silver'
};

// spaceship = object
// "fuel Type" = key
// diesel	= value

--------------------------------------

Accessing Properties

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

OR BRACKET NOTATION:

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

YOU CAN USE BRAKET NOTATION WITH FUNCTIONS

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

-----------------------------------------------------

CHANGING OBJECTS

const spaceship = {type: 'shuttle'};

spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'


DELETING PROPERTIES OF OBJECTS

const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};

delete spaceship.mission;  // Removes the mission property
-----------------------------------------------------

object Methods
// When the data stored on an object is a function we call that a method. 
// A property is what an object has, while a method is what an object does.


const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

// SAME AS ABOVE BUT NEW ES6 SYNTAX;

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
// CALLING THE OBJECT NETHOD
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.

EG2:


let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

const alienShip = { 
	retreat(){
    console.log(retreatMessage);
    },
  takeOff() {
  console.log(`Spim... Borp... Glix... Blastoff!`);
}
};

alienShip.retreat();
alienShip.takeOff();

---------------------------------------------------------------

NESTED OBJECTS

const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
};

HOW TO ACCESS:

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'


EG2:

let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

const capFave = spaceship.crew.captain['favorite foods'][0];
------------------------------------------

EDITING NESTED ARRAYS:

spaceship.passengers = 
  [{"Alex Carroll":{
    age:33,
    job:`coder`,
  }},
    {"Laura Carroll":{
    age:30,
    job: `Teacher`,
   }}
    ];

-----------------------------------------------

EDITING OBJECTS USING FUNCTIONS:

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

const greenEnergy = object => {
  
  object[`Fuel Type`] = `avocado oil`;
};

const remotelyDisable = object => {
  
  object.disabled = true;
};

// ENVOKE FUNCTIONS ON THE SPACESHIP PARAMETER:
greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

// OUTPUT:
{ 'Fuel Type': 'avocado oil',
  homePlanet: 'Earth',
  disabled: true }

--------------------------------------------

LOOPING THROUGH OBJECTS

// for in

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

// Our for...in will iterate through each element of the spaceship.crew object. In each iteration,
// the variable crewMember is set to one of spaceship.crew's keys, enabling us to log a list of crew members' role and name.

EG2:

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)

  //OUTPUT

captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna

for (let crewMember in spaceship.crew){
  
  console.log(`${crewMember}: ${spaceship.crew[crewMember].degree}`)
};

  //OUTPUT

captain: Computer Engineering
chief officer: Aerospace Engineering
medic: Physics
translator: Conservation Science


-------------------------------------------------------