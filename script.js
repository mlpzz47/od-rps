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

let choiceBtn = document.querySelectorAll(".choice-btn"); 
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

let getUserChoice = () => {
    return new Promise((resolve) => {
        choiceBtn.forEach((choice) => {
            choice.addEventListener("click", () => {
                let userChoice;
                if (choice === rockBtn) {
                    userChoice = "rock";
                } else if (choice === paperBtn) {
                    userChoice = "paper";
                } else if (choice === scissorsBtn) {
                    userChoice = "scissors";
                }
                resolve(userChoice);
            })
        })
    })
}

let playGame = async ()=>{
    let userScore = 0;
    let computerScore = 0;
    let result = document.querySelector(".result-container");
    let playRound = (userChoice,computerChoice)=>{
        if (userChoice === computerChoice) {
            result.textContent =`Tie! ${userScore} - ${computerScore}`;
        } else if ((userChoice == "paper" && computerChoice == "rock") || (userChoice == "rock" && computerChoice == "scissors") || (userChoice == "scissors" && computerChoice == "paper")) {
            userScore++;
            result.textContent = `You won this round! ${userScore} - ${computerScore}`;
        } else {
            computerScore++;
            result.textContent = `You lost this round! ${userScore} - ${computerScore}`;
        }
    }

    while (userScore < 5 && computerScore < 5) {
        let userChoice = await getUserChoice();
        let computerChoice = getComputerChoice();
        playRound(userChoice,computerChoice);
    }

    if(userScore === 5) {
        result.classList.add("green");
        result.textContent = `You won! Final result: ${userScore} - ${computerScore}`;
    } else {
        result.classList.add("red");
        result.textContent = `You lost! Final result: ${userScore} - ${computerScore}`;
    }
    
}

playGame();