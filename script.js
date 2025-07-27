const getComputerChoice = ()=>{
    const randomNumber = Math.random() * 3;
    if (randomNumber >= 0 && randomNumber < 1){
        return "Rock";
    } else if (randomNumber >= 1 && randomNumber < 2){
        return "Paper";
    } else if (randomNumber >= 2 && randomNumber < 3){
        return "Scissors";
    }
}

const choiceBtn = document.querySelectorAll(".choice-btn"); 
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.querySelector(".result-container");


const getUserChoice = () => {
    return new Promise((resolve) => {
        choiceBtn.forEach((choice) => {
            choice.addEventListener("click", () => {
                let userChoice;
                if (choice === rockBtn) {
                    userChoice = "Rock";
                } else if (choice === paperBtn) {
                    userChoice = "Paper";
                } else if (choice === scissorsBtn) {
                    userChoice = "Scissors";
                }
                resolve(userChoice);
            })
        })
    })
}

let userScore;
let computerScore;

let playGame = async ()=>{
    userScore = 0;
    computerScore = 0;
    const playRound = (userChoice,computerChoice)=>{
        if (userChoice === computerChoice) {
            result.textContent =`Tie! ${userScore} - ${computerScore}`;
        } else if ((userChoice == "Paper" && computerChoice == "Rock") || (userChoice == "Rock" && computerChoice == "Scissors") || (userChoice == "Scissors" && computerChoice == "Paper")) {
            userScore++;
            result.textContent = `You won this round! ${userChoice} beats ${computerChoice} --- ${userScore} - ${computerScore}`;
        } else {
            computerScore++;
            result.textContent = `You lost this round! ${computerChoice} beats ${userChoice} --- ${userScore} - ${computerScore}`;
        }
    }

    while (userScore < 5 && computerScore < 5) {
        let userChoice = await getUserChoice();
        let computerChoice = getComputerChoice();
        playRound(userChoice,computerChoice);
    }

    if(userScore === 5) {
        result.classList.add("green");
        result.innerHTML = `You won g! Final result: ${userScore} - ${computerScore} <br><br> <button class='play-again-btn' type='button'>Play Again</button>`;
    } else {
        result.classList.add("red");
        result.innerHTML = `You lost! Final result: ${userScore} - ${computerScore} <br><br> <button class='play-again-btn' type='button'>Play Again</button>`;
    }

    const playAgainBtn = result.querySelector('.play-again-btn');
    playAgainBtn.addEventListener('click', ()=> {
        playGame();
        result.innerHTML = 'Press a button to start g 🔝🔝🔝';
    });
}

playGame();