//give the computer 3 choices and make it pick one

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}
//pick an option from the three and play against the computer

function playGame() {
  let playerSelection = window.prompt(
    "So what will it be? Rock, paper or scissors?"
  );
  let computerSelection = getComputerChoice();
  let playersPick =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  let computerPick =
    computerSelection.charAt(0).toUpperCase() +
    computerSelection.slice(1).toLowerCase();
  console.log("The player has chosen:", playersPick);
  console.log("The computer has chosen:", computerPick);

  return game(playersPick, computerPick);
}

//set-up the result with winning and losing combinations
//declare winner
function game(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Try again!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "Computer wins!";
  } else {
    return "Player wins!";
  }
}
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
