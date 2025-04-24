function getComputerChoice() {
    if (Math.floor(Math.random()*3) == 0) {
        return "rock" ;
    }else if (Math.floor(Math.random()*3) == 1) {
     return "paper"   ;
    }else{
        return "scissors" ;
    }
}

function getHumanChoice(){ 
  return  prompt("rock? paper or scissors?");
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice==computerChoice) {
            console.log("no winner")
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("you lose , scissors beat paper");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("you win , paper beat rock");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("you win , rock beat scissors");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("you lose , paper beat rock");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("you win , scissors beat paper");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("you lose , rock beat scissors");
            computerScore++;
        }
    }

    let i = 0;
        while (i < 2) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection,computerSelection);
        playRound(humanSelection, computerSelection);
        i++;
    }
    console.log(`human score is ${humanScore} and computer score is ${computerScore}`)  ;

    if (humanScore < computerScore) {
        return "you lost the game";
    } else if (humanScore > computerScore) {
        return "congrats!!! you won" ;
    }  else{
        return "no winner";
    }
}

console.log(playGame());