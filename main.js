/// PROJECT CODE-NAME: 'RockPaperScissors' ///

// USER CHOICE 
var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else { 
        return "Invalid response! Please pick: 'rock', 'paper', or 'scissors'.";  
    }
}

// COMPUTER CHOICE
var getComputerChoice = function () {
    var randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0 ) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// DETERMINE WINNER
var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice){
        return "tie game"; 
    } if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "The computer won!";
        } else {
            return "The user won!";
        }
    } if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "The computer won!";
        } else if (computerChoice === 'rock') {
            return "The user won!";
        }
    } if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "The computer won!"
        } else if (computerChoice === 'paper') {
            return "The user won!"
        }
    }
}

// PLAY GAME
function playGame () {
    var userChoice = getUserChoice('rock');
        console.log("User choice: " + userChoice);

        if (userChoice === "Invalid response! Please pick: 'rock', 'paper', or 'scissors'.") {
            return; // Stop execution to prevent 'undefined'
        }
    var computerChoice = getComputerChoice();
        console.log("Computer choice: " + computerChoice);
    var cheatResult = cheatCode(userChoice);
    if (cheatResult) {
        return cheatResult;
    } else {
         return determineWinner (userChoice, computerChoice);
    }   
}

// CHEAT CODE 
var cheatCode = function(userChoice) {
    if (userChoice === 'bomb') {
        return "BOOM! The user wins!";
    }
}

// START GAME 
playGame();
