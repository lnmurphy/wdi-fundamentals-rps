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
        winner = "TIE!";
    } else if (playerMove === "rock" && computerMove === "paper") {
        winner = "COMPUTER!";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "PLAYER!";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "PLAYER!";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "COMPUTER!";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "COMPUTER!";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "PLAYER!";
    }
    return winner 
}
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    



function playToFive() {
	console.log("Let's play Rock, Paper, Scissors!");
    console.log("First to 5 wins!" + "\n");
	var playerWins = 0;
    var computerWins = 0;
    var round = 0;

    while (playerWins < 5 && computerWins < 5) {
    
    if (playerWins < 5 && computerWins < 5) {
        round++;
        console.log("Round" + " " + round + " " + "let's play!")
    } 
    
	var playerMove = getPlayerMove();
    console.log("-" + "Player chose" + " " + playerMove);
    
    var computerMove = getComputerMove();
   	console.log("-" + "Computer chose" + " " + computerMove);
   	
   	var winner = getWinner(playerMove,computerMove);
  	console.log("The winner of this round is" + " " + winner);
  	
  	if (winner === "PLAYER!") {
  		playerWins++;
  		console.log("The score is" + " " + playerWins + " " + "wins for player, and" + " " + computerWins + " " + "wins for computer" + "\n");
  		
		} else if (winner === "COMPUTER!") {
		computerWins++;
		console.log("The score is" + " " + playerWins + " " + "wins for player, and" + " " + computerWins + " " + " wins for computer" + "\n");
  	
		} else if (winner === "TIE!") {
		playerWins += 0;
		computerWins += 0;
		console.log("The score is" + " " + playerWins + " " + "wins for player, and" + " " + computerWins + " " + "wins for computer" + "\n");
	}
}

		console.log("There were" + " " + round + " " + "rounds played");
		console.log("The final score is" + " " + playerWins + " " + "to" + " " + computerWins);

		if (playerWins > computerWins) {
 		console.log("PLAYER!" + " " + "has won the game!");
		} else {
		console.log("COMPUTER!" + " " + "has won the game!");
		}

		return [playerWins, computerWins];
	}

playToFive();


// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

