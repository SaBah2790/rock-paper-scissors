//give the computer 3 choices and make it pick one

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}
//pick an option from the three and play against the computer

function playGame(playerSelection, computerSelection) {
  playerSelection = prompt("So what will it be? Rock, paper or scissors?");
  let playersPick =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  return (
    playersPick +
    " " +
    computerSelection +
    " " +
    `Rock beats ${computerSelection}`
  );
}
const playerSelection = "paper";
computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));

//set-up the result with winning and losing combinations
//declare winner
