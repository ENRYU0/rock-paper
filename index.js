let humanScore = 0;
let computerScore = 0;

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    div.textContent = "Game reset! Start playing again.";
}

const computerChoice = function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

// Modify the playRound function to include a reset
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        div.textContent = `No winner and the score is ${humanScore} to ${computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        div.textContent = `You lose, scissors beat paper. Score: ${humanScore} to ${computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        div.textContent = `You win, paper beats rock. Score: ${humanScore} to ${computerScore}`;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        div.textContent = `You win, rock beats scissors. Score: ${humanScore} to ${computerScore}`;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        div.textContent = `You lose, paper beats rock. Score: ${humanScore} to ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        div.textContent = `You win, scissors beat paper. Score: ${humanScore} to ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        div.textContent = `You lose, rock beats scissors. Score: ${humanScore} to ${computerScore}`;
    }

    // Check for a winner
    if (computerScore == 5) {
        div.textContent = "The computer wins!!!!!";
        resetGame(); // Reset the game
    } else if (humanScore == 5) {
        div.textContent = "You win!!!!!!!";
        resetGame(); // Reset the game
    }
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

const body = document.querySelector("body");
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

rock.addEventListener("click", () => playRound("rock", computerChoice()));
paper.addEventListener("click", () => playRound("paper", computerChoice()));
scissors.addEventListener("click", () => playRound("scissors", computerChoice()));

const div = document.createElement("div");
body.appendChild(div);


