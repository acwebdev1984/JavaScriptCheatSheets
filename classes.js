// CLASSES

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}
const halley = new Dog('Halley');

console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console

// Although you may see similarities between class and object syntax, there is one important method that sets them apart.
// It's called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.

---------------------------------

constructor method:
// JavaScript calls the constructor() method every time it creates a new instance of a class.

class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}

// Dog is the name of our class. By convention, we capitalize and CamelCase class names.
// JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
// This constructor() method accepts one argument, name.
// Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance's name property to the name argument.
// Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.


EG2:

class Surgeon {
  constructor(name,department) {
    this.name = name;
    this.department = department;
    
  }
}

YOU CAN NOW CREATE INSTANCES OF YOUR CLASS.


class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'


EG2:

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

-------------------------------------------------------

METHODS

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
// BELOW ARE THE METHODS

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
    // NOTE THIS ADDS ONE TO BEHAVIOUR WHEN CALLED.
  }
}

EG2

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


--------------------------------------------------------------
METHOD CALLS :

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior++;
  }
}

const halley = new Dog('Halley');

let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console BECAUSE WE DID CALL INCREMENT BEHAVIOUR ON THIS ONE.


-------------
EG2

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name); // CURRY
surgeonCurry.takeVacationDays(3); // TAKES 3 DAYS OFF
console.log(surgeonCurry.remainingVacationDays); // 17 DAYS REMAINING

-----------------------------------------

Inheritance I

// WHEN YOU WANT TO CREATE A NEW CLASS, BUT THESE WILL HOLD MANY ( BUT NOT ALL ) OF THE PROPERTIES OF A CLASS YOU HAVE ALREADY CREATED.

PARENT CLASS OR SUPER CLASS

class HospitalEmployee{
    constructor (name) {
        this._name = name;
      	this._remainingVacationDays = 20;
  }

get name(){
  return this._name;
}
  
get remainingVacationDays(){
  
  return this._remainingVacationDays;
}
  
  takeVacationDays(daysOff){
    
    this._remainingVacationDays -= daysOff;
    
  }

}

// A NEW CLASS THAT ADOPTS THE VALUES OF THE PARENT PLUS EXTRAS YOU WANT TO ADD;

class Nurse extends HospitalEmployee{
  constructor(name, certifications){
    super(name)
    this._certifications = certifications
  }
}

// YOU CAN NOW CREATE A NEW NURSE

const nurseOlynyk = new Nurse ('Olynyk',['Trauma', 'Pediatrics']);

//THE CHILD CLASS "NURSE" HAS INHERITED ALL THE GETTERS FROM THE THE PARENT "HOSTPITAL EMPLOYEE"

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays); // 15


---------------------------------------------------------------

STATIC METHODS

// A METHOD THAT YOU ONLY WANTS ACCESSABLE FROM THAT CLASS AND NO SUBCLASSES: USES KEY WORD "static"

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}

// the above returns a random name out of the 5 in the array


EG2
 
 static generatePassword(){
    
    return Math.floor(Math.random() * 10000)
  }
// the above returns a random number between 1 and 10,000 
