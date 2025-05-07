let getComputerChoice = ()=> {
    let randomNumber = Math.random() * 3;
    let finalChoice;
    if (randomNumber >= 0 && randomNumber < 1){
        finalChoice = "rock";
    } else if (randomNumber >= 1 && randomNumber < 2){
        finalChoice = "paoer";
    } else if (randomNumber >= 2 && randomNumber < 3){
        finalChoice = "scissors";
    }
    return finalChoice;
}

console.log(getComputerChoice())