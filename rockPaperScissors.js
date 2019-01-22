// THERE IS AN ERROR WITH THIS ON THE getUserChoice
//Always undefined.

const getUserChoice = userInput => {
 
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
        return userInput;
  }
  else {
    
    console.log("sorry please enter a valid option");
  }
};

getComputerChoice = computerInput =>{
    
  randomNumber = Math.floor(Math.random()*3);

  switch (randomNumber) {
  case 0:
    return "rock";
  case 1:
    return "paper";
  case 2:
    return "scissors";
  }
  
}

determineWinner = (userChoice, computerChoice) =>{

if (userChoice === computerChoice) {
  return 'The game is a tie!';
}

  if (userChoice === "rock") {
  if (computerChoice === "paper") {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === "paper") {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
} 
  
};

playGame = () =>{
  
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
	console.log("You chose:" + getUserChoice());
  console.log("The Computer Chose:" + getComputerChoice());
  console.log(determineWinner(userChoice, computerChoice));
};


playGame();