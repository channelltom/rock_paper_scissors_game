const resultContainer = document.querySelector("#resultsContainer")
let results = []

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
  const pChoice = playersChoice.toLowerCase();
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
  const score = determineWinner(winner)

  const resultElement = document.querySelector("#resultText")
  resultElement.textContent = result
  resultContainer.appendChild(resultElement)

  const matchResults = document.querySelector("#gameResultText")
  matchResults.textContent = score
  resultContainer.appendChild(matchResults)
}

function determineWinner(winner) {
  results.push(winner)

  const pWins = results.filter((v) => v === "Player").length;
  const cpuWins = results.filter((v) => v === "Computer").length;
  var res = null
  if (pWins === 5) {
    var res = (`You Won! ${pWins} to ${cpuWins}`);
    results = []
  } else if (cpuWins === 5) {
    var res = (`Computer Won ${cpuWins} to ${pWins}`);
    results = []
  }
  return res
}

const buttons = document.querySelectorAll("#btn")

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e)
    const choice = e.target.innerText
    const g = play(choice, getComputerChoice())
  })
})