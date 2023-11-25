function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const rand = Math.floor(Math.random() * choices.length);
  const choice = choices[rand];
  return choice;
}

function getPlayersChoice() {
  const msg = "Whats your move?";
  const choice = window.prompt(msg);
  return choice;
}

function play(playersChoice, computersChoice) {
  const pChoice = playersChoice;
  var winner = null;

  if (pChoice === computersChoice) {
    result = "Its a Tie!";
    winner = "tie";
  } else if (
    (pChoice === "rock" && computersChoice === "scissors") ||
    (pChoice === "paper" && computersChoice === "rock") ||
    (pChoice === "scissors" && computersChoice === "paper")
  ) {
    result = "You Win! " + pChoice + " beats " + computersChoice;
    winner = "Player";
  } else {
    result = "You Lose.. " + computersChoice + " beats " + pChoice;
    winner = "Computer";
  }
  console.log(result);
  return winner;
}

function determineWinner(results) {
  const pWins = results.filter((v) => v === "Player").length;
  const cpuWins = results.filter((v) => v === "Computer").length;
  if (pWins > cpuWins) {
    console.log("You Won!");
  } else if (cpuWins > pWins) {
    console.log("Computer Won...");
  } else {
    console.log("Its a Tie!");
  }
}

function game() {
  var rounds = 0;
  const result = [];
  while (rounds < 5) {
    rounds += 1;
    var g = play(getPlayersChoice(), getComputerChoice());
    result.push(g);
  }
  console.log(result);
  determineWinner(result);
}

game();
