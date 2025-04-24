function getComputerChoice() {
    if (Math.floor(Math.random()*3) == 0) {
        return "rock" ;
    }else if (Math.floor(Math.random()*3) == 1) {
     return "paper"   ;
    }else{
        return "scissors" ;
    }
}
console.log(getComputerChoice());
function getHumanChoice(){
  let  humanChoice = prompt("rock? paper or scissors?")
  return humanChoice ;
}
console.log(getHumanChoice());