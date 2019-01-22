//HIGHER ORDER FUNCTIONS

A higher-order function is a function that either accepts functions as parameters, returns a function, or both!

YOU CAN ASSIGN A FUNCTION WITH TO A VARIABLE AND THEN CALL IT:

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

BECOMES:

const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!

IF YOU FORGET THE NAME OF YOUR ORIGIONAL FUNCTION, YOU CAN:

console.log(busy.name);

--------------------------------------------------------

FUNCTIONS AS PARAMETERS

// THIS FUNCTION CHECKS THAT 2 PLUS 2 = 4 A MILLION TIMES
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// THIS FUNCTION TAKES A NUMBER AND ADDS 2
const addTwo = num => num + 2;
addTwo(5);


// THIS FUNCTION TAKE A FUNCTION CHECKS THE DATE AND TIME, RUNS A FUNCTION AND CHECKS DATE AND TIME
// AGAIN, AND THEN CALCULATES THE DIFFERENCE.
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

// THIS FUNCTION CHECKS THE TIME IT TAKES TO RUN THE LONG FUNCTION
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);


//THIS FUNTION, TAKES 2 ARGUEMENT, A FUNCTION AND A VALUE
// IT SAVES THE VALUE OF THE FUNCTION 2 TIMES
// IF THE VALUE IF THE SAME EACH TIME, GIVES THE VALUE OR IF NOT
// RETURNS THE STRING
const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry;
    } else {
        return 'This function returned inconsistent results';
    }
};

// WE ENVOKE checkConsistentOutput, USING THE ADD2 FUNCTION AND VALUE OF 5
// IT CHECKS IT TWICE AND RETURN THE VALUE + 2
console.log(checkConsistentOutput(addTwo, 5));