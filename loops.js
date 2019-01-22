//  LOOPS

// PREVENTING YOU FROM COMPLETING REPETATIVE TASKS

const vacationSpots = ["Thailand", "South America","Spain" ];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

-------------------------------------------

FORLOOP

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
};
// OUTPUT
0
1
2
3
-------------------------------------------

REVERSE FORLOOP

for (let counter = 3; counter >=0; counter--){
  console.log(counter)
};

--------------------------------------------------

LOOPING THROUGH ARRAYS

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
};

Grizzly Bear
Sloth
Sea Lion

EG2

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below

for (let i =0 ; i < vacationSpots.length; i++){
  console.log(vacationSpots[i]);
}

-----------------------------------------------

NESTED LOOPS
COMPARING 2 ARRAYS


const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

------------------------------------------

COMPARE AND CREATE NEW ARRAY USING FORLOOP:

const bobsFollowers = ["Alex","Laura","jim","Charlotte"];
const tinasFollowers = ["Alex", "Laura", "Rick"];
const mutualFollowers =[];

for (let i = 0; i < bobsFollowers.length; i++ ){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
--------------------------------------------------------

WHILE LOOPS
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

---------------------------------------------------------

DO WHILE STATEMENTS

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// In this example, the code block makes changes to the countString
// variable by appending the string form of the i variable to it.
// First, the code block after the do keyword is executed once.
// Then the condition is evaluated. If the condition evaluates to true,
// the block will execute again. The looping stops when the condition evaluates to false.

// Note that the while and do...while loop are different! 
// Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

--------------------------------------------------------------------

BREAK - GET OUT OF A LOOP 

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

OUTPUT	

Banana.
Banana.
Banana.
Orange you glad I broke out the loop!


// EG2:

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below

for (let i =0; i < rapperArray.length; i++ ){
  
  console.log(rapperArray[i])
  if (rapperArray[i] === "Notorious B.I.G."){
    break;
  }

}

  console.log(`"And if you don't know, now you know"`);

// OUTPUT
// Lil' Kim
Jay-Z
Notorious B.I.G.
"And if you don't know, now you know"

----------------------------------------------------------

COMPARE EXCERCISE

const input = "whats up mo fos";

const vowels = ["a","e","i","o","u"];

let resultArray = []; 

for (let i=0; i < input.length; i++){
  for(let j=0; j < vowels.length; j++){
    if(input[i]===vowels[j]){
    resultArray.push(input[i]);
     }
   
  }
  
}
console.log(resultArray.join(""));  ---- auoo


--------------------------------

for of loops

const basket = ["apple", "Oranges", "grapes"];

for (item of basket) {

	console.log(item);
}

THIS WILL OUTPUT ALL THE ITEMS IN THE BASKET ARRAY
AN EASIER FORM OF LOOPING/ITTERATING OVER THE ARRAY OR A STRING

------------------

FOR IN loops

THIS WORKS WITH OBJECTS
YOU DO NOT ITTERATE OVER AN OBJECT, YOU "ENUMERATE"
AND THIS IS WHAT FOR IN ALLOWS YOU TO DO:

const basket2 = {
	apples: 5,
	oranges: 10,
	grapes: 100,

}

for (item in basket2) {

	console.log(item);
}

OUTPUT
"apple"
"Oranges"
"grapes"

Note:
OBECTS ARE ENUMERATABLE
ARRAYS ARE ITERATABLE AND ENUMERATABLE