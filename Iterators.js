iterators - for manipulating arrays?

// forEach() - Aptly named, .forEach() will execute the same code for each element of an array.

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

// Output 
Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists.

EG2:

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(allTheFruits => console.log("I want to eat a" + " " + allTheFruits));

// output:
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple

----------------------------------------

//.map() 

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

// Output new array ---- [ 1, 4, 9, 16, 25 ]

EG2

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

EG3

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(initial => {
            
  return initial[0];
            
            
            });

console.log(secretMessage.join(''));

//output = helloworld

-------------------------------------------------
//   .filter() - NEW ARRAY CREATED

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//output ---- [ 5, 3.14, 100 ]

EG2:

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']


EG3

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(number => number < 250);

console.log(smallNumbers);  [ 200, 3.14, 7, 13 ]

EG4

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter(long => {
  
  if(long.length >7){
     
     return true;
     }});

console.log(longFavoriteWords);  [ 'nostalgia', 'hyperbole', 'esoteric' ]

-----------------------------------------------------------

The .findIndex() Method

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3
console.log(jumbledNums[3]); // Output: 5

// If there isn't a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1


EG2

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  
  if (animal === "elephant"){
    
    return true;
  }
});

EG3

const startsWithS = animals.findIndex(animal => {
  
  if(animal[0] === "s"){
    
    return true;
  }
});

---------------------------------------------------------

The .reduce() Method

// The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

EG2

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(( accumulator,currentValue)=> {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10);

console.log(newSum);

// Output

The value of accumulator:  10 NOTE STARTING NUMBER ABOVE
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26

----------------------------------------------------