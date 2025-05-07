let getComputerChoice = ()=>{
    let randomNumber = Math.random() * 3;
    if (randomNumber >= 0 && randomNumber < 1){
        return "rock";
    } else if (randomNumber >= 1 && randomNumber < 2){
        return "paper";
    } else if (randomNumber >= 2 && randomNumber < 3){
        return "scissors";
    }
}

let getUserChoice = ()=>{
    let userChoice = parseInt(prompt("1: rock, 2: paper, 3: scissors"));
    if (userChoice === 1) {
        return "rock";
    } else if (userChoice === 2) {
        return "paper";
    } else if (userChoice === 3) {
        return "scissors";
    } else {
        alert("invalid input");
        return getUserChoice();
    }
}

let playGame = ()=>{
    let userScore = 0;
    let computerScore = 0;
    let playRound = (userChoice,computerChoice)=>{
        if ((userChoice == "rock" && computerChoice == "rock") || (userChoice == "paper" && computerChoice == "paper") || (userChoice == "scissors" && computerChoice == "scissors")) {
            alert("tie " + userScore + " - " + computerScore);
        } else if ((userChoice == "paper" && computerChoice == "rock") || (userChoice == "rock" && computerChoice == "scissors") || (userChoice == "scissors" && computerChoice == "paper")) {
            userScore++;
            alert("you won " + userScore + " - " + computerScore);
        } else if ((userChoice == "scissors" && computerChoice == "rock") || (userChoice == "rock" && computerChoice == "paper") || (userChoice == "paper" && computerChoice == "scissors")) {
            computerScore++;
            alert("you lost " + userScore + " - " + computerScore);
        }
    }
    for (let i = 0; i < 5; i++) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        playRound(userChoice,computerChoice);
    }
    document.writeln("final result: " + userScore + " - " + computerScore)
}

playGame();