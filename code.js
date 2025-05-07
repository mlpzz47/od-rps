let getComputerChoice = ()=>{
    let randomNumber = Math.random() * 3;
    let computerFinalChoice;
    if (randomNumber >= 0 && randomNumber < 1){
        computerFinalChoice = "rock";
    } else if (randomNumber >= 1 && randomNumber < 2){
        computerFinalChoice = "paper";
    } else if (randomNumber >= 2 && randomNumber < 3){
        computerFinalChoice = "scissors";
    }
    return computerFinalChoice;
}

let getUserChoice = ()=>{
    let userFinalChoice = parseInt(prompt("1: rock, 2: paper, 3: scissors"));
    if (userFinalChoice === 1) {
        return "rock";
    } else if (userFinalChoice === 2) {
        return "paper";
    } else if (userFinalChoice === 3) {
        return "scissors";
    } else {
        alert("invalid input");
        return getUserChoice();
    }
}

console.log(getComputerChoice());
console.log(getUserChoice());