////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.


function getComputerMove(move) {
    return move || randomPlay();
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock" && computerMove === "rock" || playerMove === "paper" && computerMove === "paper" || playerMove === "scissors" && computerMove === "scissors") {
        return "TIE!";
    } else if (playerMove === "rock" && computerMove === "paper") {
        return "COMPUTER!";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        return "PLAYER!";
    } else if (playerMove === "paper" && computerMove === "rock") {
        return "PLAYER!";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        return "COMPUTER!";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        return "COMPUTER!";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        return "PLAYER!";
    }
    return winner 
}
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

