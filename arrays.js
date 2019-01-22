// ARRAYS

// STANDARD ARRAY STRUCTURE

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

// Access an element within an array
// access keep a journal:
newYearsResolutions[0]; 

//Access and Change Elements:

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']


--------------------------------------------------

// let array 

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments[0] = "Mayo";

console.log(condiments);

condiments = ["Mayo"];

// Notice that you can re-assign elements in an array and
 // re-assign an entire new array to a variable declared using the let keyword.

 ---------------------------------------------

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

utensils[3] = "Spoon";
console.log(utensils);

// you can also change the elements of a const array.

// BUT, you cannot create a new array with the same variable name.

utensils = ["fork"];
-------------------------------------------------------------

//  access the length = .length 

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2

-----------------------------------------------------------

// The .push()Method - ADD ITEMS TO THE END OF AN ARRAY:
// THIS CHANGES OR MUTATES THE EXISTING ARRAY

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

---------------------------------------------------------

// The .pop() Method - Removes the last item of an array.
// .pop() does not take any arguments, it simply removes the last element.

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

------------------------------------------------------

// .shift(); Removes the first element in an array:

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

// OUTPUT - ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

----------------------------------------------------------

// .unshift() - ADDS ITEMS TO THE BEGINNING OF AN ARRAY

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.unshift("popcorn");

console.log(groceryList);

// OUTPUT - [ 'popcorn',  'bananas',  'coffee beans',  'brown rice',  'pasta',  'coconut oil',  'plantains' ]

--------------------------------------------------------

// .slice(); ALLOWS YOU TO CUT A PIECE OF THE ARRAY, APPLYING 2 ARGUMENTS;


// SLICE IS NOT MUTATING AND DOES NOT AMMEND THE ORIGIONAL ARRAY
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList.slice(1,4));
// OUTPUT --- [ 'bananas', 'coffee beans', 'brown rice' ]


--------------------------------------------------------

// .indexOf() - FINDS THE INDEX OF AN ITEM WITHIN AN ARRAY

const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex); 4

---------------------------------------------------------

// ARRAYS AND FUNCTION 
// USING FUNCTIONS TO AMMEND ARRAYS:

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

-------------------------------------------------

// NESTED ARRAYS

const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

// CREATE A NEW VARIABLE FROM A NESTED ARRAY

const numberClusters = [[1,2],[3,4],[5,6]];

const target = numberClusters[2][1];

console.log(target); 
//  output - 6
-----------------------------------------------------

-----------------------------------------------
