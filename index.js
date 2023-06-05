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
    `You choose ${playersPick}` +
    " " +
    `The computer chose ${computerSelection}`
  );
}
const playerSelection = "paper";
computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));

//set-up the result with winning and losing combinations
//declare winner
function game() {
  if (playerSelection === computerSelection) {
    return "It's a tie! Try again!";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "Paper wraps rock, computer wins";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Scissors cut paper, computer wins!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Can't cut a rock with scissors, computer wins!";
  }
  if (computerSelection === "rock" && playerSelection === "paper") {
    return "Paper wraps rock, player wins!";
  }
  if (computerSelection === "paper" && playerSelection === "scissors") {
    return "Paper wraps rock, player wins";
  }
  if (computerSelection === "scissors" && playerSelection === "rock") {
    return "Can't cut a rock with scissors, player wins!";
  }
}
